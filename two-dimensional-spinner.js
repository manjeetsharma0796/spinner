const rotateSpinner = function () {
  const spinner = ['\n<', '  ^', '\n    >', '\n\n  v' ];

  let counter = 0;

  setInterval(() => {
    let position = counter % 4;
    console.clear();
    console.log("\033[?25l",spinner[position]);
    counter++;
  }, 300);
};

rotateSpinner();