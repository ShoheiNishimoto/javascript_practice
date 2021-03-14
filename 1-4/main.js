const tasks = [
  {
    content: '机を片付ける',
    ganne: '掃除'
  },
  {
    content: '牛乳を買う',
    ganne: '買い物'
  },
  {
    content: '散歩をする',
    ganne: '運動'
  }
]


function showTask () {
  console.log ('========================');
  console.log ('現在持っているのタスク一覧');
  console.log ('========================');
  tasks.forEach ((task, index) => {
    console.log (`${index} : [内容]${task.content}、[ジャンル]${task.ganne}`);
  });
}

function addTask () {
  let rep = 3;
  while (rep > 0) {
    const newContent = prompt ('タスクを入力してください');
    const newGanre = prompt ('ジャンルを入力してください');
    const newObj = {};
    newObj.content = newContent;
    newObj.ganne = newGanre;
    tasks.push (newObj);
    alert ('タスクを追加しました');
    showTask ();
    rep --;
  }
}

showTask ();
addTask ();