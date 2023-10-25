const date = new Date();

const dateFormatOptions = {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
};

const timeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

const formattedDate = date.toLocaleDateString('en-US', dateFormatOptions);
const formattedTime = date.toLocaleTimeString('en-US', timeFormatOptions);

console.log(`Date: ${formattedDate}`);
console.log(`Time: ${formattedTime}`);
