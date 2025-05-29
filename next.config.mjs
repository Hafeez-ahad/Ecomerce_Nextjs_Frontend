// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Important: This tells Next.js to look for app directory in src/
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

export default nextConfig;
