module.exports = {
  reactStrictMode: true,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
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
          "https://docs.google.com/forms/d/e/1FAIpQLScBDLeZ6LEsQouekpkYLe1gUmCoyrY6jTgovzpW32JicB1EzQ/viewform",
        permanent: false,
      },
      {
        source: "/intern/info",
        destination:
          "https://docs.google.com/document/d/1GU1KV7ql5dxkj_dkwGQz6cf1tda92QYGAW4l0rlFj3s/edit?usp=sharing",
        permanent: false,
      },
      {
        source: "/contribute/resources",
        destination:
          "https://ganning127.github.io/verste-contributor-resources",
        permanent: false,
      },
    ];
  },
};
