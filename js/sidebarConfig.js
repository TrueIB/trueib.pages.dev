const sidebarTitlesArray = [
  { title: "💻 网站首页", command: "replace('index.html'); " },
  { title: "📝 个人项目", command: "replace('projects.html'); " },
  { title: "📚 学习笔记", command: "replace('studyNotes.html'); " },
  { title: "📔 编程笔记", command: "replace('programmingNotes.html'); " },
  { title: "💬 联系方式", command: "replace('contact.html'); " },
  { title: "📄 帮助文档", command: "replace('help.html'); " },
];

let subject = "light";


function replace(url) {
  closeSidebar();
  window.location.replace(url);
}


function closeSidebar() {
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

function openSidebar() {
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

function subjectConfig() {
  const subjectButton = document.querySelector(".subjectButton");
  subject = subject == "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-subject", subject);
  subjectButton.innerHTML = subject == "light" ? "☀️" : "🌙";
}

document.addEventListener("DOMContentLoaded", () => {
  let header_sidebar = '<header class="header"><div class="left-content">&nbsp;&nbsp;<b class="menuButton" onclick="openSidebar(); ">☰</b>&nbsp;&nbsp;&nbsp;TrueIB</div><div class="right-content"><b class="subjectButton" onclick="subjectConfig(); ">☀️</b>&nbsp;&nbsp;</div></header><div class="overlay" onclick="closeSidebar(); "></div><div class="sidebar"><div class="closeButton" onclick="closeSidebar(); ">×</div><div style="padding: 20px;"><h2 class="h">TrueIB</h2><ul>';
  const body = document.querySelector("body");

  sidebarTitlesArray.forEach(item => {
    header_sidebar += `<li onclick="${item.command}">${item.title}</li>`;
  });

  header_sidebar += "</ul></div></div>";
  body.innerHTML = header_sidebar + body.innerHTML;
});
