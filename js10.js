const number = parseInt(process.argv[2]);

if (isNaN(number)) {
  console.log('Invalid input. Please enter a valid number.');
} else {
  console.log(`Multiplication Table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}
