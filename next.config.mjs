/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === 'production';
const repoName = 'Karthik-Portfolio';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : ''
};

export default nextConfig;
