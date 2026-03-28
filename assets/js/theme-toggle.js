document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
    themeToggle.textContent = 'Dark Mode';
  }

  themeToggle.addEventListener('click', function() {
    body.classList.toggle('light');
    const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
    themeToggle.textContent = body.classList.contains('light') ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', currentTheme);
  });
});