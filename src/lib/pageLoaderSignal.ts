let finished = false;
const listeners = new Set<() => void>();

export function isLoaderFinished() {
  return finished;
}

export function signalLoaderShown() {
  finished = false;
}

export function signalLoaderFinished() {
  if (finished) return;
  finished = true;
  listeners.forEach((listener) => listener());
}

export function subscribeLoaderFinished(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
