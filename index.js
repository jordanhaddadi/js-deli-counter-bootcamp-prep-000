var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
  let i = katzDeli.length;
  if (i) {
    var name=katzDeli.shift();
    return (`Currently serving ${name}.`);
  }
  else {
    return (`There is nobody waiting to be served!`);
  }
}
var line = [];

function currentLine(katzDeli) {
  var i = 0;
  while (i < katzDeli.length) {
    line.push ([i+1]+katzDeli[i]);
    text += "The line is currently:" + i;
    i++;
}
  if (katzDeli.length === 0) {
    return `The line is currently empty.` }
  else {
    return `The line is currently:` + line;
  }
}
 