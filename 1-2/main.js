function quiz() {
  let answer = true;
  
  while (answer) {
    const reply = prompt('日本の首都は？');
    if(reply !== '東京'){
      alert('不正解です!');
    }else if(reply == '東京'){
      alert('正解です!');
      answer = false;
    }
  }
}

quiz();