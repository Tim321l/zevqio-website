export const isInternalPath = (path: string): boolean =>
  path.startsWith("/") && !path.startsWith("//") && !path.includes(" ");

export const isEmailAddress = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
