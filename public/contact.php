<?php
declare(strict_types=1);

header("Content-Type: application/json; charset=utf-8");

if (($_SERVER["REQUEST_METHOD"] ?? "") !== "POST") {
    http_response_code(405);
    echo json_encode(["ok" => false, "error" => "Method not allowed."]);
    exit;
}

$raw = file_get_contents("php://input");
$data = json_decode($raw !== false && $raw !== "" ? $raw : "null", true);
if (!is_array($data)) {
    $data = $_POST;
}

function contact_field(array $data, string $key, int $max): string
{
    $value = isset($data[$key]) ? trim((string) $data[$key]) : "";
    $value = str_replace(["\r", "\n"], " ", $value);
    if (strlen($value) > $max) {
        $value = substr($value, 0, $max);
    }
    return $value;
}

if (contact_field($data, "_gotcha", 200) !== "") {
    echo json_encode(["ok" => true]);
    exit;
}

$firstName = contact_field($data, "firstName", 80);
$lastName = contact_field($data, "lastName", 80);
$email = contact_field($data, "email", 120);
$phone = contact_field($data, "phone", 40);
$message = isset($data["message"]) ? trim((string) $data["message"]) : "";
$message = str_replace(["\r\n", "\r"], "\n", $message);
if (strlen($message) > 5000) {
    $message = substr($message, 0, 5000);
}

if ($firstName === "" || $lastName === "" || $email === "" || $message === "") {
    http_response_code(422);
    echo json_encode(["ok" => false, "error" => "Please fill in every required field."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(["ok" => false, "error" => "Enter a valid email address."]);
    exit;
}

$to = "libertyinfoscience@gmail.com";
$subject = "=?UTF-8?B?" . base64_encode("New contact from {$firstName} {$lastName}") . "?=";
$body = "First name: {$firstName}\n"
    . "Last name: {$lastName}\n"
    . "Email: {$email}\n"
    . "Phone: " . ($phone !== "" ? $phone : "Not provided") . "\n\n"
    . $message . "\n";
$headers = implode("\r\n", [
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "From: Liberty Info Science <info@libertyinfoscience.com>",
    "Reply-To: {$email}",
]);

if (!mail($to, $subject, $body, $headers)) {
    http_response_code(500);
    echo json_encode(["ok" => false, "error" => "Could not send your message. Please try again."]);
    exit;
}

echo json_encode(["ok" => true]);
