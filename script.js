function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var content = document.querySelector('.content');
  var toggleBtn = document.querySelector('.toggle-btn');
  var menuIcon = document.querySelector('#menu-icon');

  sidebar.classList.toggle('active');
  content.classList.toggle('active');
  toggleBtn.classList.toggle('active');
  menuIcon.textContent = sidebar.classList.contains('active') ? 'close' : 'menu';
}
