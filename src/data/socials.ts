import type { IconType } from "react-icons";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/libertyinfoscience/",
    icon: FaLinkedinIn,
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/libertyinfoscience",
    icon: FaDribbble,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/lisliberty",
    icon: FaBehance,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/libertyinfoscience/",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/service.libertyinfoscience",
    icon: FaFacebookF,
  },
];
