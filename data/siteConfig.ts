export const siteConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? ''
};

export function withBasePath(path: string): string {
  if (!path.startsWith('/')) {
    return `${siteConfig.basePath}/${path}`;
  }
  return `${siteConfig.basePath}${path}`;
}
