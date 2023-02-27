const { query } = require('express');
const express = require('express');
const connection = require('../connection');
const router = express.Router();




router.post('/signup', (req, res) => {
    let user = req.body;
    let query = "SELECT email, password, userName, createdAt, updatedAt, userStatus FROM user WHERE email=?"
    connection.query(query, [user.email], (err, results)=>{
        if (!err){
            if (results.length <=0){
                query = "INSERT INTO user(firstName, lastName, userName, email, password, picture, createdAt, updatedAt, createdBy, updatedBy, noOfAttempts, userStatus) values(?, ?, ?, ?, ?, null, curdate(), curdate(), ?, ?, 1, false)";
                // let currentDate = new Date().toJSON().slice(0, 10); 
                // let query_1 = "INSERT INTO user(firstName, lastName, userName, email, password, picture, createdAt, updatedAt, createdBy, updatedBy, noOfAttempts, userStatus) values(?, ?, ?, ?, ?, null,";
                // let query_full = query_1.concat(currentDate, ", ", currentDate, ", ?, ?, 1, 'false')");
                //query = query_full;
                connection.query(query,[user.firstName, user.lastName, user.userName, user.email, user.password, user.userName, user.userName], (err,results) => {
                    if(!err){
                        return res.status(200).json({message: "Successfully Registered!"});
                    }
                    else{
                        return res.status(500).json(err);
                    }
                })
            }
            else{
                return res.status(400).json({message: "Email already exists!"});
            }
        }
        else{
            return res.status(500).json(err);
        }
    })  
})

module.exports = router;