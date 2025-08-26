const Projects = [
  {
    name: "小学成长纪念册网站",
    github: "https://github.com/True2012/class-album/tree/main",
    gitcode: "https://gitcode.com/2401_82923566/class-album",
    download: null
  },
  {
    name: "测试项目1",
    github: null,
    gitcode: null,
    download: null
  },
  {
    name: "测试项目2",
    github: null,
    gitcode: null,
    download: null
  },
  {
    name: "测试项目3",
    github: null,
    gitcode: null,
    download: null
  },
  {
    name: "测试项目4",
    github: null,
    gitcode: null,
    download: null
  },
  {
    name: "测试项目5",
    github: null,
    gitcode: null,
    download: null
  },
  {
    name: "测试项目6",
    github: null,
    gitcode: null,
    download: null
  },
];


document.addEventListener("DOMContentLoaded", () => {
  let text = "";
  const projects_dd = document.querySelector(".projects-content");
  let github, gitcode, download;
  Projects.forEach(item => {
    github = item.github == null ? '<b style="color: grey;">暂未托管</b>' : `<a href="${item.github}">前往GitHub仓库</a>`;
    gitcode = item.gitcode == null ? '<b style="color: grey;">暂未托管</b>' : `<a href="${item.gitcode}">前往GitCode仓库</a>`;
    download = item.download == null ? '<b style="color: grey;">暂无链接</b>' : `<a href="${item.download}">前往下载界面</a>`;
    text += `<br><div class="project-div"><br><h3>&nbsp&nbsp${item.name}</h3>&nbsp&nbsp&nbspGitHub仓库：${github}<br>&nbsp&nbsp&nbspGitCode仓库：${gitcode}<br>&nbsp&nbsp&nbsp下载链接：${download}<br><br></div><br><br>`;
  });
  projects_dd.innerHTML = text;
});
