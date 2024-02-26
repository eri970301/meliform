const path = require("path");
const fs = require('fs');

const controller = {
    index: (req, res) => {
        res.render('index', {title: 'hola'})
    }
};

module.exports = controller;