function Add() {
  var count = 0;
  console.log('Constructor', count);

  this.toString = function() {
    console.log('toSTring call by default');
    return count++;
  }
  this.toObject = function() {
    console.log('toOOOOBject');
  }
}

module.exports = new Add();