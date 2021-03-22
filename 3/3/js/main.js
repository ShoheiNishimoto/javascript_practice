const addTaskBtn = document.getElementById ('addTaskBtn');
const taskTxt = document.getElementById ('taskTxt');
const taskArea = document.querySelector ('tbody');
const taskArray = [];




//追加ボタンを押した時にタスクの追加を行う
addTaskBtn.addEventListener ('click', () => {
  addTask ();
  showTask ();
  rmTask ();
  toggleStatus ();
});

//入力されたタスクをtasks配列に追加する
function addTask () {
  const comment = taskTxt.value;
  if (comment) {
    taskArray.push ({
      comment: comment,
      status: 'working',
    })
    taskTxt.value = '';
  }
}

function showTask () {
  const flagment = document.createDocumentFragment ();

  while (taskArea.firstChild) {
    taskArea.removeChild (taskArea.firstChild);
  }

  for (let i = 0; i < taskArray.length; i++) {
    //---------------------------------
    const tr = document.createElement ('tr');
    tr.setAttribute ('id', `${i}`);

    if (taskArray [i].status === 'working') {
      tr.classList.add ('working');
    } else {
      tr.classList.add ('done');
    }

    

    //id
    const idTd = document.createElement ('td');
    idTd.textContent = `${i}`;
    tr.appendChild (idTd);
    
    //コメント部分
    const commentTd = document.createElement ('td');
    commentTd.textContent = taskArray [i].comment;
    tr.appendChild (commentTd);
    //---------------------------------
    
    
    //---------------------------------
    //   //statusボタン
    const statusTd = document.createElement ('td');
    const statusBtn = document.createElement ('button');
    statusBtn.setAttribute ('id', `statusBtn${i}`);

    if (taskArray [i].status === 'working') {
      statusBtn.textContent = '作業中';
    } else {
      statusBtn.textContent = '完了';
    }

    statusTd.appendChild (statusBtn);
    tr.append (statusTd);
    //---------------------------------
    
    
    //---------------------------------
    //   //削除ボタン
    const rmTd = document.createElement ('td');
    const rmBtn = document.createElement ('button');
    rmBtn.setAttribute ('id', `rmBtn${i}`);
    rmBtn.textContent = "削除";
    rmTd.appendChild (rmBtn);
    tr.append (rmTd);
    //---------------------------------
    
    //---------------------------------
    //   //flagmentにまとめる
    flagment.appendChild (tr);
    taskArea.appendChild (flagment);
    //---------------------------------

  }
  displayToggle ();
}
  
  //tasksに格納されたtaskの数に応じて削除用のボタンの情報を取得
function rmTask () {
  const rmBtn = [];
  for (let i = 0; i < taskArray.length; i ++) {
    rmBtn.push (document.getElementById (`rmBtn${i}`));
  }
  rmBtn.forEach ((e, i) => {
    e.addEventListener ('click', () => {
      const tr = document.getElementById (`${i}`);
      tr.remove ();
      taskArray.splice (i, 1);

      showTask ();
      toggleStatus ()
      rmTask ();
    })
  })
}

// //statusBtnを取得して状態切り替えのトグルを追加
function toggleStatus () {
  const statusBtns = [];
   for (let i = 0; i < taskArray.length; i ++) {
    statusBtns.push (document.getElementById (`statusBtn${i}`));
  }
  statusBtns.forEach ((e, i) => {
    e.addEventListener ('click', () => {
      taskArray [i].status = (taskArray [i].status === 'working') ? 'done' : 'working';

      showTask ();
      toggleStatus ();
      rmTask ();
    })
  })
};

function displayToggle () {
  const radio = document.getElementsByName ('status');
  if (radio[0].checked) {
    taskArray.forEach ((e, i) => {
      document.getElementById (`${i}`).classList.remove ('hidden');
    })
  } else if (radio[1].checked) {
    taskArray.forEach ((e, i) => {
      if (e.status === 'working') {
        document.getElementById (`${i}`).classList.remove ('hidden');
      } else {
        document.getElementById (`${i}`).classList.add ('hidden');
      }
    })
  } else if (radio[2].checked) {
    taskArray.forEach ((e, i) => {
      if (e.status === 'done') {
        document.getElementById (`${i}`).classList.remove ('hidden');
      } else {
        document.getElementById (`${i}`).classList.add ('hidden');
      }
    })
  }
}

