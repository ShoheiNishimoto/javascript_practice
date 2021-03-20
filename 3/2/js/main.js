const addBtn = document.getElementById ('addBtn');
const text = document.getElementById ('text');
const tasks = [];
const tasksArea = document.querySelector ('tbody');

//addTaskで追加されたタスクをDOMに追加する
function showTask () {
  while (tasksArea.firstChild) {
    tasksArea.removeChild (tasksArea.firstChild);
  }
  const flagment = document.createDocumentFragment ();

  for (let i = 0; i < tasks.length; i ++) {
    //tr
    const tr = document.createElement ('tr');
    tr.setAttribute ('id', `${i}`);
 
    //id
    const id = document.createElement ('td');
    id.textContent = `${i}`;
    tr.appendChild (id);

    //コメント部分
    const comment = document.createElement ('td');
    comment.textContent = tasks [i];
    tr.appendChild (comment);

    //statusボタン
    const status = document.createElement ('td');
    const statusBtn = document.createElement ('button');
    statusBtn.setAttribute ('id', `statusBtn${i}`);
    statusBtn.textContent = "作業中";
    status.appendChild (statusBtn);
    tr.append (status);
    
    //削除ボタン
    const rm = document.createElement ('td');
    const rmBtn = document.createElement ('button');
    rmBtn.setAttribute ('id', `rmBtn${i}`);
    rmBtn.textContent = "削除";
    rm.appendChild (rmBtn);
    tr.append (rm);
    
    //flagmentにまとめる
    flagment.appendChild (tr);
  }
  //tasksAreaに追加
  tasksArea.appendChild (flagment);
}


//入力されたタスクをtasks配列に追加する
function addTask () {
  const newTask = text.value;
  if (newTask) {
    tasks.push (newTask);
    text.value = '';
  }
}

//tasksに格納されたtaskの数に応じて削除用のボタンの情報を取得

function rm () {
  const rmBtn = [];
  for (let i = 0; i < tasks.length; i ++) {
    rmBtn.push(document.getElementById (`rmBtn${i}`));
  }
  rmBtn.forEach ((e,i) => {
    e.addEventListener ('click', () => {
      const tr = document.getElementById (`${i}`);
      tasks.splice (i, 1);
      tr.remove ();
      showTask ();
      rm ();
    })
  })
}


addBtn.addEventListener ('click', () => {
  addTask ();  
  showTask ();
  rm ();
});


