const fs = require('fs');

const loadFileWithSpinner = function (filePath, loadFileAfter) {
  const spinner = ['.', '..', '...', '....', '.....'];
  let counter = 0;

  const startSpinner = setInterval(() => {
    let position = counter % 5;

    console.clear();
    console.log("\033[?25l", spinner[position]);

    counter++;
  }, 300)

  const display = () => {
    clearInterval(startSpinner);

    const fileContent = fs.readFileSync(`${filePath}`, 'utf-8');
    console.clear();
    console.log(fileContent);
  };
  setTimeout(display, loadFileAfter);
};

const main = () => {
  const filePath = process.argv[2];
  loadFileWithSpinner(filePath, 4500);
};

main();