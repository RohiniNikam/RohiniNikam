const date1 = new Date('2023-10-25');
const date2 = new Date('2023-10-26');

const difference = date2.getTime() - date1.getTime();

if (difference > 0) {
  console.log('date2 is greater than date1.');
} else if (difference < 0) {
  console.log('date1 is greater than date2.');
} else {
  console.log('date1 and date2 are the same.');
}
