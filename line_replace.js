const str = `This is a
multiline
string.`;

const newStr = str.replace(/\n|\r/g, ' ');

console.log(newStr); // This is a multiline string.
