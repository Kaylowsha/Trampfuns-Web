// Configuration constants for the application
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Trampfuns-Web' : '';

/**
 * Helper function to prefix asset paths with basePath in production
 * @param path - The asset path (e.g., '/images/logo.png')
 * @returns The full path with basePath prepended if in production
 */
export function assetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return BASE_PATH ? `${BASE_PATH}/${cleanPath}` : `/${cleanPath}`;
}
