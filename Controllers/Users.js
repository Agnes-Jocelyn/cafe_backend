const User = require('../Models/Users')
const Bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = "Lapar"

module.exports = {
    create : (req, res, next) => {
        User.create({
            fullname : req.body.fullname,
            email : req.body.email,
            phone : req.body.phone,
            password : req.body.password
        })
        .then((result)=> res.json(result))
        .catch((err) => res.json(err))
    },

    authenticated : function(req, res, next) {
        User.findOne({
            email : req.body.email
        })
        .then((response, err) => {
            if(err) next(err);
            else{
                if(
                    response != null && Bcrypt.compareSync(req.body.password, response.password)
                ) {
                    jwt.sign({
                        id: response._id,
                    },
                    privateKey, {expiresIn : "2 days"},
                    (err, token )=>{
                        res.json(token);
                    }  
                    )
                } else{
                    res.json({status : err})
                }
            }
        })
        .catch((err) => res.json(err))
    },

    getData : (req, res) => {
        User.find({})
        .then((response) => res.json(response))
        .catch((err) => res.json(err))
    }

}