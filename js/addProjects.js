const Projects = [
  {
    name: "小学成长纪念册网站",
    github: "https://github.com/True2012/class-album/tree/main",
    gitcode: "https://gitcode.com/2401_82923566/class-album",
    download: null
  },
  {
    name: "工作台网站",
    github: null,
    gitcode: null,
    download: null
  }
];


document.addEventListener("DOMContentLoaded", () => {
  let text = "";
  const projects_dd = document.querySelector(".projects-dd");
  let github, gitcode, download;
  Projects.forEach(item => {
    github = item.github == null ? "暂未托管" : `<a href="${item.github}" target="_blank">前往GitHub仓库</a>`;
    gitcode = item.gitcode == null ? "暂未托管" : `<a href="${item.gitcode}" target="_blank">前往GitCode仓库</a>`;
    download = item.download == null ? "暂无下载链接" : `<a href="${item.download}" target="_blank">前往下载界面</a>`;
    text += `<br><div class="project-div"><br><h3>${item.name}</h2>GitHub仓库：${github}<br>GitCode仓库：${gitcode}<br>下载页面链接：${download}<br><br></div><br><br>`;
  });
  projects_dd.innerHTML = text;
});
