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
 
function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    line.push [` `, +i+, ` `]
    text += "The line is currently:" + i;
    i++;
}
  if (i) {
    var name = currentLine.sort;
    return `The line is currently empty.` }
  else (i); {
    return array;
  }
}
 