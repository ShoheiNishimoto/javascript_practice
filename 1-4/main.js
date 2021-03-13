const tasks = {
  content: [
    '机を片付ける',
    '牛乳を買う',
    '散歩をする',
  ],
  ganre: [
    '掃除',
    '買い物',
    '運動',
  ]
}


function showTask () {
  console.log ('========================');
  console.log ('現在持っているのタスク一覧');
  console.log ('========================');
  for (let i = 0; i < tasks.content.length; i++) {
    console.log (`${i} : [内容]${tasks.content[i]}、[ジャンル]${tasks.ganre[i]}`);
  }
}

function addTask (count) {
  for (let i = 0; i < count; i++) {
    const newContent = prompt ('タスクを入力してください');
    const newGanre = prompt ('ジャンルを入力してください');
    tasks.content.push (newContent);
    tasks.ganre.push (newGanre);
    alert ('タスクを追加しました');
    showTask ();
  }
}

showTask ();
addTask (3);