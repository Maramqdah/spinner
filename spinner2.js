//process.stdout.write('hello from spinner1.js... \rheyyy\n');
let output= ["|", "/", "-", "\\", "|"];
for (let i = 0; i < output.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${output[i]}`);
  }, 100 * (i + 5));
}





