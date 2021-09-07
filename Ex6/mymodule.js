const fs = require('fs')
const path = require('path')

module.exports = function(folder, ext, callback) {
    fs.readdir(folder, function(err, data) {
        if (err) return callback(err);
        callback(null, data.filter(file =>path.extname(file)==='.'+ext));
    });
}



