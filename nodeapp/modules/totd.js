var fs = require('fs');

var maxTips = 10;
var minTips = 1;
var tipsPath = '../tips/';

exports.myDateTime = function () {
    return Date();
  }; 

  exports.readTip = function (nr) {
    console.log('The parameter nr is' +  nr)
    nr = parseInt(nr)
    let returnTip = 1;
    if (nr > minTips && nr < maxTips) {
      returnTip = nr;
    }
    return "return tip nr " + returnTip
  }; 

var allFiles = []; // This contains all the files we have
var nrFiles = 0;

function readAllFiles() {
    let data = '../tips/legends';
   
    fs.readdir(data, function(err, res) {
      console.log(res);
      allFiles = res;
      allFiles.forEach(element => {
        console.log("File in directory: " + element)        
      });
    })

    nrFiles = allFiles.length;

    console.log("Number of files is " + nrFiles)
}

exports.readFile = function (filename) {
    console.log('The parameter nr is' +  filename)
    let filePath = ''

    readAllFiles();

    // Ok: return fs.readFileSync('sample.txt');
    return fs.readFileSync('../tips/legends/wall.txt');
    

    
}