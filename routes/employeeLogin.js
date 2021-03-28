const Employee = require('../models/employee');
const express = require('express');
const UserSession = require('../models/UserSession');

const router = express.Router();

router.post('/signup', (req, res, next) => {
    const { body } = req;
    const { 
        password,
        firstName, 
        lastName, 
        role
    } = body;
    let {
        email
    } = body;
    
    if (!email) {
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank.'
        }); 
     }
    if (!password) {
        return res.send({
           success: false,
           message: 'Error: Password name cannot be blank.'
       }); 
    }
    if (!firstName) {
        return res.send({
            success: false,
            message: 'Error: First name cannot be blank.'
        }); 
     }    
     if (!lastName) {
        return res.send({
            success: false,
            message: 'Error: Last name cannot be blank.'
        }); 
     }
     if (!role) {
        return res.send({
            success: false,
            message: 'Error: Role cannot be blank.'
        }); 
     }

     console.log('here');

     email = email.toLowerCase();
     Employee.find({
        email: email
     }, (err, previousUsers) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        } else if (previousUsers.length > 0) {
            return res.send({
                success: false,
                message: 'Error: Account already exists.'
            });
        } 

        // Save new user
        let newUser = new Employee();

        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.role = role;
        newUser.save((err, user) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            return res.send({
                success: true,
                message: 'Success: User has successfully signed up'
            });
        });
     });
     
});

module.exports = router;