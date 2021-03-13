const tasks = [
  '掃除',
  '買い物',
  '散歩',
];

function showTask () {
  console.log ('========================');
  console.log ('現在持っているのタスク一覧');
  console.log ('========================');
  for (let i = 0; i < tasks.length; i++) {
    console.log (`${i}:${tasks[i]}`);
  }
}

function addTask (count) {
  for (let i = 0; i < count; i++) {
    const input = prompt ('タスクを入力してください');
    tasks.push (input);
    alert ('タスクを追加しました');
    showTask ();
  }
}

showTask ();
addTask (3);