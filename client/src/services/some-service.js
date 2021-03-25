// import TokenService from "./token-service";
const axios = require("axios");

const someService = {
  shLogin(username, password) {
    return axios.post("http://192.168.1.9:8077/web/session/authenticate", {
      jsonrpc: "2.0",
      method: "call",
      params: {
        db: "siptest",
        login: username,
        password: password,
      },
    });
  },

  shPassReset(email) {
    return axios.post(
      `http://192.168.1.9:8077/web/reset_password?login=${email}`,
      {
        method: "POST",
      },
      { headers: { "content-type": "text/plain" } }
    );
  },

  shSearchRead(model, params) {
    // var login = TokenService.getAuthToken();
    axios.post("http://192.168.1.11:8077/web/dataset/search_read", {
      jsonrpc: "2.0",
      // headers: { "Content-Type": "application/json", "X-Openerp": login },
      params: {
        model: model,
        fields: [...params],
      },
    });
  },

}

export default someService;