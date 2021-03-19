const text = document.getElementById ('text');
const tasks = [];

//入力されたタスクをtasks配列に追加する
function addTask () {
  const newTask = text.value;
  if (newTask) {
    tasks.push (newTask);
    text.value = '';
  }
}




