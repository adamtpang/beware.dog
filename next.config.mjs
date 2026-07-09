/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this project; the parent Aether folder also has a
  // lockfile, which would otherwise be inferred as the root.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
