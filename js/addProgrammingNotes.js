const programmingNotesArray = [
  [false, "Python", [
    [false, "Numpy", [
      [false, "基础教程", [
        [true, "安装和导入", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\1.html"],
        [true, "创建数组", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\2.html"],
        [true, "索引和切片", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\3.html"],
        [true, "数组的运算", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\4.html"],
        [true, "数组形状操作", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\5.html"],
        [true, "随机数生成", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\6.html"],
        [true, "进阶操作", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\基础教程\\\\7.html"]
      ]],
      [false, "高级教程", [
        [true, "视图与副本", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\高级教程\\\\1.html"],
        [true, "广播机制", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\高级教程\\\\2.html"],
        [true, "高级花式索引", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\高级教程\\\\3.html"],
        [true, "结构化数组", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\高级教程\\\\4.html"],
        [true, "通用函数技巧", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\高级教程\\\\5.html"],
        [true, "性能优化技巧", ".\\\\programmingNoteFiles\\\\Python\\\\Numpy\\\\高级教程\\\\6.html"]
      ]]
    ]],
    [false, "Pandas", [
      [true, "安装与导入", ".\\\\programmingNoteFiles\\\\Python\\\\Pandas\\\\1.html"],
      [true, "两大数据结构", ".\\\\programmingNoteFiles\\\\Python\\\\Pandas\\\\2.html"],
      [true, "读取与写入", ".\\\\programmingNoteFiles\\\\Python\\\\Pandas\\\\3.html"],
      [true, "检查与概览", ".\\\\programmingNoteFiles\\\\Python\\\\Pandas\\\\4.html"],
      [true, "挑选与切片", ".\\\\programmingNoteFiles\\\\Python\\\\Pandas\\\\5.html"],
      [true, "清洗与整理", ".\\\\programmingNoteFiles\\\\Python\\\\Pandas\\\\6.html"],
      [true, "排序与筛选", ".\\\\programmingNoteFiles\\\\Python\\\\Pandas\\\\7.html"],
      [true, "计算与分组", ".\\\\programmingNoteFiles\\\\Python\\\\Pandas\\\\8.html"],
      [true, "合并与连接", ".\\\\programmingNoteFiles\\\\Python\\\\Pandas\\\\9.html"],
      [true, "时间序列处理", ".\\\\programmingNoteFiles\\\\Python\\\\Pandas\\\\10.html"],
      [true, "数据可视化", ".\\\\programmingNoteFiles\\\\Python\\\\Pandas\\\\11.html"]
    ]],
    [false, "Matplotlib", [
      [true, "安装与导入", ".\\\\programmingNoteFiles\\\\Python\\\\Matplotlib\\\\1.html"],
      [true, "第一个图表", ".\\\\programmingNoteFiles\\\\Python\\\\Matplotlib\\\\2.html"],
      [true, "添加基础元素", ".\\\\programmingNoteFiles\\\\Python\\\\Matplotlib\\\\3.html"],
      [true, "图表类型", ".\\\\programmingNoteFiles\\\\Python\\\\Matplotlib\\\\4.html"],
      [true, "面向对象接口", ".\\\\programmingNoteFiles\\\\Python\\\\Matplotlib\\\\5.html"],
      [true, "与Pandas的集成", ".\\\\programmingNoteFiles\\\\Python\\\\Matplotlib\\\\6.html"],
      [true, "高级技巧", ".\\\\programmingNoteFiles\\\\Python\\\\Matplotlib\\\\7.html"],
      [true, "综合实践", ".\\\\programmingNoteFiles\\\\Python\\\\Matplotlib\\\\8.html"]
    ]],
    [false, "Seaborn", [
      [true, "安装和导入", ".\\\\programmingNoteFiles\\\\Python\\\\Seaborn\\\\1.html"],
      [true, "代码框架", ".\\\\programmingNoteFiles\\\\Python\\\\Seaborn\\\\2.html"],
      [true, "基础绘图", ".\\\\programmingNoteFiles\\\\Python\\\\Seaborn\\\\3.html"],
      [true, "高级绘图", ".\\\\programmingNoteFiles\\\\Python\\\\Seaborn\\\\4.html"],
      [true, "精细化样式控制", ".\\\\programmingNoteFiles\\\\Python\\\\Seaborn\\\\5.html"],
      [true, "与Pandas的集成", ".\\\\programmingNoteFiles\\\\Python\\\\Seaborn\\\\6.html"],
      [true, "实战案例", ".\\\\programmingNoteFiles\\\\Python\\\\Seaborn\\\\7.html"],
    ]],
    [false, "PyTorch", [
      [true, "安装和导入", ".\\\\programmingNoteFiles\\\\Python\\\\PyTorch\\\\1.html"],
      [true, "暂无笔记", ".\\\\programmingNoteFiles\\\\Python\\\\PyTorch\\\\2.html"],
      [true, "暂无笔记", ".\\\\programmingNoteFiles\\\\Python\\\\PyTorch\\\\3.html"],
      [true, "暂无笔记", ".\\\\programmingNoteFiles\\\\Python\\\\PyTorch\\\\4.html"]
    ]],
    [false, "Tkinter", [
      [true, "暂无笔记", ""]
    ]],
    [false, "PySide", [
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
