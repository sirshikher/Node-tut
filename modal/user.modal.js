const db = require("../db");

let loginmodule = async function(username,role,password) {

    
    try {

        //
      const result = await db.query(
        "INSERT INTO login (username,role,password) VALUES ($1,$2,$3) RETURNING *",
        [username,role,password]
      );
      return result.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  module.exports ={
    loginmodule
  }