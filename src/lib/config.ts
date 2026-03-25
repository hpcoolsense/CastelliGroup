const basePath = process.env.NODE_ENV === "production" ? "/CastelliGroup" : "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
