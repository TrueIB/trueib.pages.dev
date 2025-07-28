const menuBtn = document.querySelector('.menuBtn');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.closeBtn');
const overlay = document.querySelector('.overlay');

function closeSidebar() {
    sidebar.style.right = '-300px';
    overlay.style.display = 'none';
}

function openSidebar() {
    sidebar.style.right = '0';
    overlay.style.display = 'block';
}