const { REGION } = process.env;

let i18n;
switch (REGION) {
  case "us":
    console.log("Using US region configuration");
    i18n = require("./config/i18n/i18n.us");
    break;
  default:
    console.log("Using default region configuration");
    i18n = require("./config/i18n/i18n.default");
}

module.exports = {
  i18n,
  // NOTE: we leave this file here for further configuration
  // of the plugin.
};
