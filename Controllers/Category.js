const Category = require('../Models/Category')

module.exports = {
    create : (req, res) => {
        Category.create({
            name : req.body.name
        })
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
    },

    getAllCategory : (req, res) =>{
        Category.find({})
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
    }

}