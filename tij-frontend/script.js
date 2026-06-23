// Generate floating particles in the hero
const particleContainer = document.getElementById('particles');
if (particleContainer) {
  for (let i = 0; i < 24; i++) {
    const p = document.createElement('span');
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 10) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.opacity = (0.3 + Math.random() * 0.5).toString();
    particleContainer.appendChild(p);
  }
}

// Navbar scroll state
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Theme toggle (persisted)
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

// ===================== AUTH (connects to backend) =====================
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

// Open / close modal
loginBtn.addEventListener('click', () => authOverlay.classList.add('open'));
closeModal.addEventListener('click', () => authOverlay.classList.remove('open'));
authOverlay.addEventListener('click', (e) => {
  if (e.target === authOverlay) authOverlay.classList.remove('open');
});

// Tab switching
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const isLogin = tab.dataset.tab === 'login';
    loginForm.style.display = isLogin ? 'flex' : 'none';
    signupForm.style.display = isLogin ? 'none' : 'flex';
  });
});

// Show logged-in state if a token already exists
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

// LOGIN submit
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

    if (!res.ok) {
      loginError.textContent = data.message || 'Login failed.';
      return;
    }

    localStorage.setItem('tij-token', data.token);
    localStorage.setItem('tij-user', JSON.stringify(data.user));
    authOverlay.classList.remove('open');
    refreshAuthUI();
  } catch (err) {
    loginError.textContent = 'Could not reach the server. Is the backend running?';
  }
});

// SIGNUP submit
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

    if (!res.ok) {
      signupError.textContent = data.message || 'Signup failed.';
      return;
    }

    localStorage.setItem('tij-token', data.token);
    localStorage.setItem('tij-user', JSON.stringify(data.user));
    authOverlay.classList.remove('open');
    refreshAuthUI();
  } catch (err) {
    signupError.textContent = 'Could not reach the server. Is the backend running?';
  }
});

document.querySelectorAll('.heart').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.color = btn.style.color === 'rgb(201, 96, 60)' ? '' : '#C9603C';
  });
});