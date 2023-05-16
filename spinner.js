const rotateSpinner = function () {
  const spinner = '|\/-\\'.split('');
  let counter = 0;

  setInterval(() => {
    let position = counter % 4;
    
    console.clear();
    console.log(spinner[position]);
    counter++;
  }, 800);
};

rotateSpinner();