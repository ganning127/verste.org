module.exports = {
  reactStrictMode: true,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  env: {
    VERSTE_EMAIL: process.env.VERSTE_EMAIL,
    VERSTE_EMAIL_PASS: process.env.VERSTE_EMAIL_PASS,
    GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  },
  async redirects() {
    return [
      {
        source: "/contribute/apply",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSfeCsXbniP7Kr4U1sX9aI4GjKWfQL1x-SzkTsee8r0Z7N17uA/viewform",
        permanent: false,
      },
      {
        source: "/contribute",
        destination:
          "https://verste.notion.site/Verste-Contributors-862f399e67c24f35a3a256904d28d368",
        permanent: false,
      },
      {
        source: "/about",
        destination:
          "https://verste.notion.site/About-Verste-e03cb661bdcb43efa87b41b4cdfd1b0c",
        permanent: false,
      },
    ];
  },
};
