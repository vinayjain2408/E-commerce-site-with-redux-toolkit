const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto" , "san-sarif"],
    },
    extend: {},
  },
  plugins: [],
}); 