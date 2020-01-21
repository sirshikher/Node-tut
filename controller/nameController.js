const nameServices = require("../services/nameServices")
let getName = async function(req,res){
   
    try {
        let response = await nameServices.getNamevalue();
         return res.json(response)
    } catch (error) {
        return res.status(400).send(error);
    }
}
let postName = async function(req,res){
    try {
        let response = await nameServices.postNamevalue(req);
        return res.json(response);
    } catch (error) {
        return res.status(400).send(error);
        
    }
}
module.exports = {
    getName,
    postName
};