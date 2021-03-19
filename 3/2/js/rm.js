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



