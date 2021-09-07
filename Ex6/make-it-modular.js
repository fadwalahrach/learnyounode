const mymodule = require('./mymodule.js')
const dir = process.argv[2]
const ext = process.argv[3]

mymodule(dir, ext, function(err, data){
    if(err) return console.error('There was an error:', err);
    data.forEach(element => {
        console.log(element);
    });;
});
  