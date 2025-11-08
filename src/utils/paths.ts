/**
 * Get the full path including base URL
 */
export function getPath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove trailing slash from base if exists, remove leading slash from path if exists
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  return cleanBase + cleanPath;
}

/**
 * Get the asset path including base URL
 */
export function getAssetPath(path: string): string {
  return getPath(path);
}

