const fizzNum = document.getElementById('fizzNum');
const buzzNum = document.getElementById('buzzNum');
const btn = document.getElementById('btn');
const outputArea = document.getElementById('outputArea');

function exportResult (fizz, buzz) {
  while (outputArea.firstChild) {
    outputArea.removeChild (outputArea.firstChild);
  }
  for (let i = 1; i < 100; i++) {
    const p = document.createElement ('p');
    p.classList.add ('added');
    if (i % fizz === 0 && i % buzz === 0) {      
      const fizzbuzzTxt = (`FizzBuzz ${i}`);
      p.textContent = fizzbuzzTxt;
      outputArea.appendChild (p);
    } else if (i % fizz === 0 && i % buzz !== 0) {
      const fizzTxt = (`Fizz ${i}`);
      p.textContent = fizzTxt;
      outputArea.appendChild (p);
    } else if (i % fizz !== 0 && i % buzz === 0) {
      const buzzTxt = (`Buzz ${i}`);
      p.textContent = buzzTxt;
      outputArea.appendChild (p);
    }
  }
}

btn.addEventListener ('click', () => {
  const regex = /^([1-9]\d*|0)$/;
  const checkFizz = regex.test(fizzNum.value);
  const checkBuzz = regex.test(buzzNum.value);
  
  if (checkFizz && checkBuzz) {
    exportResult (fizzNum.value, buzzNum.value);
  } else {
    while (outputArea.firstChild) {
      outputArea.removeChild (outputArea.firstChild);
    }
    const p = document.createElement ('p');
    p.textContent = '整数値を入力してください';
    outputArea.appendChild (p);
  }
});
