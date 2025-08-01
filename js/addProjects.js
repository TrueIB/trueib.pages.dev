const Projects = [
    {
        name: "小学成长纪念册网站",
        github: "https://github.com/True2012/class-album/tree/main",
        gitcode: "https://gitcode.com/2401_82923566/class-album"
    },
    {
        name: "工作台网站",
        github: null,
        gitcode: null
    }
];


document.addEventListener("DOMContentLoaded", () => {
    let text = "";
    const projects_dd = document.querySelector(".projects-dd");
    Projects.forEach(item => {
        text += `<br><div class="project-div"><br><h3>&nbsp&nbsp${item.name}</h3>&nbsp&nbspGitHub：${item.github == null? "暂未托管" : `<a href="${item.github}">前往GitHub仓库</a>`}<br>&nbsp&nbspGitCode：${item.github == null? "暂未托管" : `<a href="${item.github}">前往GitCode仓库</a>`}<br><br></div><br>`
    });
    console.log(text);
    console.log(projects_dd.innerHTML);
    projects_dd.innerHTML = text;
});
