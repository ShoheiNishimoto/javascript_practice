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
