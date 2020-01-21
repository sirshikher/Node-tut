const db = require("../db");
let getNamevalue = async function() {
  try {
    let results = await db.query(
      "Select name from crocodile c where exists (Select * from fishes f where f.name = c.name )"
    );

    if (results.rowCount == 0) {
      results = await db.query("Select * from crocodile");
    }
    return results.rows;
  } catch (err) {
    throw err;
  }
};
let postNamevalue = async function(req) {
  try {
    const result = await db.query(
      "INSERT INTO crocodile (name) VALUES ($1) RETURNING *",
      [req.body.name]
    );
    return result.rows[0];
  } catch (err) {
    console.log(err);
    throw err;
  }
};

let postfish = async function(req) {
  try {
    const result = await db.query(
      "INSERT INTO fishes (name,type) VALUES ($1,$2) RETURNING *",
      [req.body.name, req.body.type]
    );
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

let getfish = async function() {
  try {
    const results = await db.query("SELECT * FROM fishes");
    return results.rows;
  } catch (err) {
    throw err;
  }
};
let patchfish = async function() {
  try {
    const result = await db.query(
      "UPDATE fishes SET name=$1, type=$2 WHERE id=$3 RETURNING *",
      [req.body.name, req.body.type, req.params.id]
    );
    return result.rows[0];
  } catch (err) {
    return next(err);
  }
};

let delfish = async function() {
  try {
    const result = await db.query(
      `DELETE FROM fishes WHERE name='${req.params.id}'`
    );
    return res.json({ message: "Deleted" });
  } catch (err) {
    return next(err);
  }
};
module.exports = {
  getNamevalue,
  postNamevalue,
  postfish,
  getfish,
  patchfish,
  delfish
};
