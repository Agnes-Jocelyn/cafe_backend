const Menu = require("../Models/Menu");

module.exports = {
  create: (req, res) => {
    Menu.create({
      name: req.body.name,
      detail: req.body.detail,
      price: req.body.price,
      imageUrl: req.file && req.file.path
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  getAllData: (req, res) => {
    Menu.find({})
      .then((result) => res.json(result))
      .catch((err) => err);
  },
};
