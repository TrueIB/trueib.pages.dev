const sidebarTitles = [
    { title: "个人主页", command: "goto_(\\\'.logo\\\'); " },
    { title: "个人简介", command: "goto_(\\\'.introduce-dt\\\'); " },
    { title: "个人项目", command: "goto_(\\\'.projects-dt\\\'); " },
    { title: "工作台", command: "openNewPage(\\\'https://truew.pages.dev\\\'); " },
    { title: "帮助文档", command: "openNewPage(\\\'help.html\\\'); " },
];


function openNewPage(url) {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = url;
    link.click();
}


function goto_(class_) {
    closeSidebar();
    targetRow = document.querySelector(class_);
    header = document.querySelector(".header");
    window.scrollTo({
        top: targetRow.offsetTop - header.offsetTop,
        behavior: "smooth"
    });
}


function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
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
    setTimeout(() => { sidebar.style.left = "0rem"; }, 17);
}

document.addEventListener('DOMContentLoaded', () => {
    let text = '<header class="header">&nbsp&nbsp&nbsp<b class="menuBtn" onclick="openSidebar();">☰</b>&nbsp&nbsp&nbspTrue2012</header><div class="overlay" onclick="closeSidebar();"></div><div class="sidebar"><div class="closeBtn" onclick="closeSidebar();">×</div><div style="padding: 20px;"><h2>True</h2>';
    const body = document.querySelector("body");
    sidebarTitles.forEach(item => {
        text += `<li onclick="eval('${item.command}');">${item.title}</li>`;
    });
    text += "</div></div>";
    body.innerHTML = text + body.innerHTML;
});
