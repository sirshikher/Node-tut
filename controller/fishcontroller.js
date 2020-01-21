const nameServices = require("../services/nameServices");
let getfishName = async function(req, res) {
  try {
    let response = await nameServices.getfish(req);
    return res.json(response);
  } catch (error) {
    return res.status(400).send(error);
  }
};
let postfishName = async function(req, res) {
  try {
    let response = await nameServices.postfish(req);
    return res.json(response);
  } catch (error) {
    return res.status(400).send(error);
  }
};
let fishpatch = async function(req, res) {
  try {
    let response = await nameServices.patchfish(req);
    return res.json(response);
  } catch (error) {
    return res.status(400).send(error);
  }
};
let fishdel = async function(req, res) {
  try {
    let response = await nameServices.delfish(req);
    return response;
  } catch (error) {
    return res.status(400).send(error);
  }
};
module.exports = {
  getfishName,
  postfishName,
  fishpatch,
  fishdel
};
