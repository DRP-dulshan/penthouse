/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export -- deployable to Vercel, Netlify or plain cPanel hosting.
  // Remove `output` and `images.unoptimized` if you deploy to Vercel and want
  // on-demand image optimisation instead (see README).
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Emits /index.html rather than /index -- required by static hosts like cPanel.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
