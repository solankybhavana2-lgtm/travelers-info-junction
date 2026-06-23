// ===================== SHARED: NAVBAR, THEME, AUTH =====================
// Used on explore.html and state.html (index.html has its own script.js with this same logic)

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('tij-theme');
if (savedTheme === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '🌙';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '🌙' : '☀';
  localStorage.setItem('tij-theme', isLight ? 'light' : 'dark');
});

const API_BASE = 'http://localhost:5000/api/auth';
const authOverlay = document.getElementById('authOverlay');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const closeModal = document.getElementById('closeModal');
const userGreeting = document.getElementById('userGreeting');
const tabs = document.querySelectorAll('.modal-tab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginError = document.getElementById('loginError');
const signupError = document.getElementById('signupError');

loginBtn.addEventListener('click', () => authOverlay.classList.add('open'));
closeModal.addEventListener('click', () => authOverlay.classList.remove('open'));
authOverlay.addEventListener('click', (e) => {
  if (e.target === authOverlay) authOverlay.classList.remove('open');
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const isLogin = tab.dataset.tab === 'login';
    loginForm.style.display = isLogin ? 'flex' : 'none';
    signupForm.style.display = isLogin ? 'none' : 'flex';
  });
});

function refreshAuthUI() {
  const savedUser = localStorage.getItem('tij-user');
  if (savedUser) {
    const user = JSON.parse(savedUser);
    userGreeting.textContent = `Hi, ${user.name}`;
    userGreeting.style.display = 'inline';
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
  } else {
    userGreeting.style.display = 'none';
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
  }
}
refreshAuthUI();

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('tij-token');
  localStorage.removeItem('tij-user');
  refreshAuthUI();
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  loginError.textContent = '';
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  try {
    const res = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) { loginError.textContent = data.message || 'Login failed.'; return; }
    localStorage.setItem('tij-token', data.token);
    localStorage.setItem('tij-user', JSON.stringify(data.user));
    authOverlay.classList.remove('open');
    refreshAuthUI();
  } catch (err) {
    loginError.textContent = 'Could not reach the server. Is the backend running?';
  }
});

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  signupError.textContent = '';
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  try {
    const res = await fetch(`${API_BASE}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) { signupError.textContent = data.message || 'Signup failed.'; return; }
    localStorage.setItem('tij-token', data.token);
    localStorage.setItem('tij-user', JSON.stringify(data.user));
    authOverlay.classList.remove('open');
    refreshAuthUI();
  } catch (err) {
    signupError.textContent = 'Could not reach the server. Is the backend running?';
  }
});