const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';
const loginmod = require("../modal/user.modal")
const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, 
    {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];
let login = async function(req,res) {
  const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);
        await loginmod.loginmodule(user.username,user.role,user.password);
       return accessToken
    } else {
        res.send('Username or password incorrect');
    }
};
module.exports = {
  login
}