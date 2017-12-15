function Add() {
  var count = 0;
  console.log('Constructor', count);

  this.toString = function() {
    console.log('toSSSSTring');
    return count++;
  }
  this.toObject = function() {
    console.log('toOOOOBject');
  }
}

module.exports = new Add();