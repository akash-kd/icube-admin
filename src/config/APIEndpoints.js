/* eslint-disable no-undef */
let ENDPOINT = "";

switch (process.env.REACT_APP_DEVELOPMENT_TYPE) {
  case "production":
    // Endpoint for Production website
    ENDPOINT = "http://139.59.95.250:3001";
    break;

  case "local":
    // Endpoint for Local
    ENDPOINT = "http://localhost:3001";
    break;
  default:
    // Default Endpoint
    ENDPOINT = "http://localhost:3001";
}

export { ENDPOINT };
