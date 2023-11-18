const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/user");

router.post('/login', (req, res) => {
    //const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    /*if (!isValid) {
        return res.status(400).json(errors);
    }*/
    //check email
    
    const email = req.body.email;
    const password = req.body.password;
      user.findOne({ email: email }).then(User => {
        //check if user exists
        if (!User) {
          return res.status(400).json({ errors: "Email Not Found" });
        }
        else {
        //check password
      
            console.log(User)
          
                bcrypt.compare(password, User.password ).then(isMatch => {
                    if (isMatch) {
                      //password checked
                        console.log('checked succefully')
                      //create jwt PAYLOAD
                      const payload = {
                        email:User.email,
                        firstname: User.firstname,
                        role: User.role
                      };
                      // sign token
                      jwt.sign(
                        payload,
                        {
                          expiresIn: 31556926 // 1 year in seconds
                        },
                        (err, token) => {
                          
                          res.status(200).json({
                            success: true,
                            token: "Bearer " + token,
                            user:User
                          });
                        }
                      );
                    } else {
                      return res
                        .status(400)
                        .json({errors: "Password incorrect" });
                    }
                  });
           
        }
      });
  
    
});

module.exports = router;