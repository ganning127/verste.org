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
        source: "/request",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSfxESQ8oTZXq6dVkjnxNZYoiAD_XyZGM60gCJFKP7asJb26dg/viewform",
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
          "https://verste-team.github.io/verste-contributor-resources/",
        permanent: false,
      },
      {
        source: "/rverste/apply",
        destination:
          "https://verste.notion.site/RVerste-Applications-56b0068b2a894af995275fa0df73ec1b",
        permanent: false,
      },
      {
        source: "/rverste/apply/deep-learning",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSfT5XgdA2c7xj-Z1IEQ9W-zwOogACyDXdqZNtDun9-zmBP-mA/viewform",
        permanent: false,
      },
      {
        source: "/rverste/apply/comp-combo",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSddzgu8VtqtDLVPFk4wmd3XHBctz37c3mxCsHjNuYceB3bAhQ/viewform",
        permanent: false,
      },
      {
        source: "/rverste/apply/graph-theory",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSeqHxwJ4nIqAelUq2Y5fCQ5P7EKCtSbCLPeP_lif6-FupszWQ/viewform",
        permanent: false,
      },
    ];
  },
};
