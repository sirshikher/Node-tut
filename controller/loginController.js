const loginServices = require("../services/loginServices");

let loginControl = async function(req, res) {
   
    try {
      let response = await loginServices.login(req);
      return res.json(response);
    } catch (error) {
   
      return res.status(400).send("error macha");
    }
  };

  module.exports = {
    loginControl
  }