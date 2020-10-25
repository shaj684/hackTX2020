const connection = require('../config/database');
const Account = connection.models.Account;
const path = require('path');

const account_register_post = (res,req,next) => {
    const saltHash = genPassword(req.body.password);
  
    const salt = saltHash.salt;
    const hash = saltHash.hash;
    console.log(saltHash);
  
    const newAccount = new Account({
      username: req.body.username,
      hash: hash,
      salt: salt,
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      pastPosition: req.body.pastPosition,
      homeOwner: req.body.homeOwner,
      timeframe: req.body.timeframe,
      brigg: req.body.brigg,
      foodStamps: req.body.foodStamps
    });
  
    console.log(newAccount);
  
    newAccount
      .save()
      .then((result) => {
        console.log(result);
        res.redirect(`/dashboard`);
      })
      .catch((err) => {
        console.log(err);
        res.send('An Error occurred...')
      });
}

const account_login_post = (req,res,next) => {
  res.redirect('/dashboard');
}

const account_login_get = (req,res,next) => {
  res.sendFile('./index.html');
}

const account_register_get = (req,res,next) => {
  res.send("<p>You are on the register page</p>");
}


module.exports = {
    account_login_post,
    account_login_get,
    account_register_post,
    account_register_get
};
