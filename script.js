const menuBtn = document.getElementById('menuBtn');
const navlinks = document.getElementById('navlinks');
if (menuBtn && navlinks) {
  menuBtn.addEventListener('click', () => navlinks.classList.toggle('open'));
  navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navlinks.classList.remove('open')));
}
