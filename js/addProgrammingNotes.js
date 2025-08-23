const programmingNotesArray = [
  [false, "Python", [
    [false, "Numpy", [
      [true, "安装和导入", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\1.html"],
      [true, "创建数组", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\2.html"],
      [true, "索引和切片", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\3.html"],
      [true, "数组的运算", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\4.html"],
      [true, "数组形状操作", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\5.html"],
      [true, "随机数生成", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\6.html"],
      [true, "进阶操作", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\7.html"]
    ]],
    [false, "Pandas", [
      [true, "暂无笔记", ""],
    ]],
    [false, "Matplotlib", [
      [true, "暂无笔记", ""]
    ]],
    [false, "PyTorch", [
      [true, "暂无笔记", ""]
    ]],
    [false, "Tkinter", [
      [true, "暂无笔记", ""]
    ]],
    [false, "PySide", [
      [true, "暂无笔记", ""]
    ]],
    [false, "Seaborn", [
      [true, "暂无笔记", ""]
    ]]
  ]],
  [false, "HTML", [
    [false, "标签", [
      [true, "暂无笔记", ""]
    ]]
  ]],
  [false, "JavaScript", [
    [true, "暂无笔记", ""]
  ]],
  [false, "CSS", [
    [true, "暂无笔记", ""]
  ]]
];

let path = [];
let subject = "light";


function replace(url) {
  const iframe = document.querySelector(".noteDisplayArea");
  closeNotesList();
  iframe.setAttribute("src", url);
  setTimeout(() => { sendSubjectToIframe(); }, 100);
}


function closeNotesList() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  setTimeout(() => { sidebar.style.left = "-1rem"; }, 10);
  setTimeout(() => { sidebar.style.left = "-2rem"; }, 20);
  setTimeout(() => { sidebar.style.left = "-3rem"; }, 30);
  setTimeout(() => { sidebar.style.left = "-4rem"; }, 40);
  setTimeout(() => { sidebar.style.left = "-5rem"; }, 50);
  setTimeout(() => { sidebar.style.left = "-6rem"; }, 60);
  setTimeout(() => { sidebar.style.left = "-7rem"; }, 70);
  setTimeout(() => { sidebar.style.left = "-8rem"; }, 80);
  setTimeout(() => { sidebar.style.left = "-9rem"; }, 90);
  setTimeout(() => { sidebar.style.left = "-10rem"; }, 100);
  setTimeout(() => { sidebar.style.left = "-11rem"; }, 110);
  setTimeout(() => { sidebar.style.left = "-12rem"; }, 120);
  setTimeout(() => { sidebar.style.left = "-13rem"; }, 130);
  setTimeout(() => { sidebar.style.left = "-14rem"; }, 140);
  setTimeout(() => { sidebar.style.left = "-15rem"; }, 150);
  setTimeout(() => { sidebar.style.left = "-16rem"; }, 160);
  setTimeout(() => { sidebar.style.left = "-17rem"; }, 170);
  setTimeout(() => { overlay.style.display = "none"; }, 170);
}

function openNotesList() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
  setTimeout(() => { sidebar.style.left = "-16rem"; }, 10);
  setTimeout(() => { sidebar.style.left = "-15rem"; }, 20);
  setTimeout(() => { sidebar.style.left = "-14rem"; }, 30);
  setTimeout(() => { sidebar.style.left = "-13rem"; }, 40);
  setTimeout(() => { sidebar.style.left = "-12rem"; }, 50);
  setTimeout(() => { sidebar.style.left = "-11rem"; }, 60);
  setTimeout(() => { sidebar.style.left = "-10rem"; }, 70);
  setTimeout(() => { sidebar.style.left = "-9rem"; }, 80);
  setTimeout(() => { sidebar.style.left = "-8rem"; }, 90);
  setTimeout(() => { sidebar.style.left = "-7rem"; }, 100);
  setTimeout(() => { sidebar.style.left = "-6rem"; }, 110);
  setTimeout(() => { sidebar.style.left = "-5rem"; }, 120);
  setTimeout(() => { sidebar.style.left = "-4rem"; }, 130);
  setTimeout(() => { sidebar.style.left = "-3rem"; }, 140);
  setTimeout(() => { sidebar.style.left = "-2rem"; }, 150);
  setTimeout(() => { sidebar.style.left = "-1rem"; }, 160);
  setTimeout(() => { sidebar.style.left = "0rem"; }, 170);
}

function enter(option) {
  let list = [...programmingNotesArray];
  for (let item of path) {
    list = list[item];
    list = list[2];
  }
  for (let item = 0; item < list.length; item++) {
    if (list[item][1] == option) {
      path.push(item);
      break;
    }
  }
  notesListCodeConfig();
}

function notesListCodeConfig() {
  const notesList = document.querySelector('.sidebar ul');
  let list = [...programmingNotesArray];
  let text = path.length == 0 ? "" : '<li onclick="returnToTheLastOne(); " style="text-align: left; line-height: 2rem; cursor: pointer; padding-left: 0;">← 返回</li>';
  for (let item of path) {
    list = list[item];
    list = list[2];
  }
  for (let item of list) {
    if (item[0]) {
      text += `<li onclick="replace('${item[2]}'); ">📘 ${item[1]}</li>`;
    } else {
      text += `<li onclick="enter('${item[1]}'); ">📁 ${item[1]}</li>`;
    }
  }
  notesList.innerHTML = text;
}

function returnToTheLastOne() {
  path.pop();
  notesListCodeConfig();
}

function subjectConfig() {
  const subjectButton = document.querySelector(".subjectButton");
  subject = subject == "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-subject", subject);
  subjectButton.innerHTML = subject == "light" ? "☀️" : "🌙";
  sendSubjectToIframe();
}

function sendSubjectToIframe() {
  const iframe = document.querySelector(".noteDisplayArea");
  iframe.contentWindow.postMessage({
    type: 'THEME_CHANGE',
    subject: subject
  }, window.location.origin);
}

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector('body');
  const text = '<header class="header"><div class="left-content">&nbsp;&nbsp;<b class="menuButton" onclick="openNotesList(); ">☰</b>&nbsp;&nbsp;&nbsp;TrueIB</div><div class="right-content"><b class="subjectButton" onclick="subjectConfig(); ">☀️</b>&nbsp;&nbsp;</div></header><div class="overlay" onclick="closeNotesList(); "></div><div class="sidebar"><div class="closeButton" onclick="closeNotesList(); ">×</div><div style="padding: 20px;"><a href="index.html" style="color: blue;"><b>← 网站首页</b></a><h2 class="h">编程笔记</h2><ul></ul></div></div>';
  body.innerHTML = text + body.innerHTML;
  notesListCodeConfig();
});
