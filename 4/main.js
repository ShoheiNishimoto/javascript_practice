const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
const title = document.getElementById ('title');
const quizLevel = document.getElementById ('quizLevel');
const text = document.getElementById ('text');
const startBtn = document.getElementById ('btn');
const btnArea = document.getElementById ('btnArea');
let quizList;
let curIndex = 0;
let correctAnswers = 0;

btn.addEventListener ('click', getQuizList);

// クイズデータの取得と1問目のクイズのセット
async function getQuizList () { 
  title.textContent = '取得中';
  text.textContent = '少々お待ちください';
  btnArea.removeChild (startBtn);
  
  try {
    const response = await fetch (url);
    const json = await response.json ();
    quizList = json.results;
    setQuiz ();
  } catch (error) {
    console.log ('取得失敗' + error);
  }
  
}

//クイズをセットする関数
function setQuiz () {
  //何問目,カテゴリー,難易度をcurIndexをもとに表示
  title.textContent = `問題${curIndex + 1}`;
  const category = document.createElement ('p');
  category.textContent = `〔ジャンル〕${quizList [curIndex].category}`;
  const level = document.createElement ('p');
  level.textContent = `〔難易度〕${quizList [curIndex].difficulty}`;

  //quizLevelから以前のDOMを削除し新しく作成したDOMを追加
  while (quizLevel.firstChild) {
    quizLevel.removeChild (quizLevel.firstChild);
  }
  quizLevel.appendChild (category);
  quizLevel.appendChild (level);
  text.textContent = `${quizList [curIndex].question}`;

  btnSet ();
  
}

//incorrectAnswerとAnswerを一つの配列にまとめてそれぞれをボタン要素のテキストとして表示させる関数
function btnSet () {
  const allChoises = [];
  const choices = quizList [curIndex].incorrect_answers;
  allChoises.push (...choices);
  const currAnswer = quizList [curIndex].correct_answer;
  allChoises.push (currAnswer);
  const shuffledChoices = [];

  //まとめた選択肢をシャッフルしてshuffledChoicesに格納
  while (allChoises.length > 0) {
    n = allChoises.length;
    k = Math.floor (Math.random () * n)
    shuffledChoices.push (allChoises [k]);
    allChoises.splice (k, 1);
  }

  while (btnArea.firstChild) {
    btnArea.removeChild (btnArea.firstChild);
  }
  
  for (let i = 0; i < shuffledChoices.length; i++) {
    const quizBtn = document.createElement ('button');
    quizBtn.textContent = shuffledChoices [i];
    quizBtn.setAttribute ('id', `btn${i}`);
    btnArea.appendChild (quizBtn);

    //回答ボタンのクリック時のイベント
    const selectedBtn = document.getElementById (`btn${i}`);
    selectedBtn.addEventListener ('click', function () {
      if (curIndex < quizList.length - 1) {
        if (this.textContent === currAnswer) {
          correctAnswers ++;
          curIndex ++;
        } else {
          curIndex ++;
        }
        setQuiz ();
      } else {
        showResult ();
      }
    })
  }

}


//回答結果を表示
function showResult () {
  while (btnArea.firstChild) {
    btnArea.removeChild (btnArea.firstChild);
  }
  while (quizLevel.firstChild) {
    quizLevel.removeChild (quizLevel.firstChild);
  }

  title.textContent = `あなたの正解数は${correctAnswers}です`;
  text.textContent = '再度チャレンジしたい場合は下をクリック';
  const finBtn = document.createElement ('button');
  finBtn.textContent = 'ホームに戻る';
  finBtn.setAttribute ('id', `finBtn`);
  btnArea.appendChild (finBtn);
  finBtn.addEventListener ('click', () => {
    curIndex = 0;
    correctAnswers = 0;
    setQuiz ();
  })
}




