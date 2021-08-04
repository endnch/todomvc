module.exports = {
  client: {
    service: {
      name: "8base",
      url: process.env.REACT_APP_8BASE_API_URL,
    },
    includes: ["src/*.{ts,tsx,js,jsx}"],
  },
};
