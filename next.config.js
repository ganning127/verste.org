module.exports = {
  reactStrictMode: true,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  env: {
    VERSTE_EMAIL: process.env.VERSTE_EMAIL,
    VERSTE_EMAIL_PASS: process.env.VERSTE_EMAIL_PASS,
    GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  }
}
