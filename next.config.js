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
        source: "/intern/apply",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSe9B0iPoimxo46JXtLTwr3xnADWWJoMSgrrBWW2Tj7o3XJBhw/viewform",
        permanent: false,
      },
      {
        source: "/intern/info",
        destination:
          "https://docs.google.com/document/d/1GU1KV7ql5dxkj_dkwGQz6cf1tda92QYGAW4l0rlFj3s/edit?usp=sharing",
        permanent: false,
      },
    ];
  },
};
