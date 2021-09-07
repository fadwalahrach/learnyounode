
console.log(process.argv.splice(2).reduce((accumulateur,initialvalue) => parseInt(accumulateur) + parseInt(initialvalue)))