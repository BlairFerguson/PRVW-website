// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Theme flip on scroll / click
const body = document.body;
const hero = document.getElementById('hero');
const switchBtn = document.getElementById('switch');

function setOn(on){
  body.classList.toggle('state-on', on);
  body.classList.toggle('state-off', !on);
  if (switchBtn) switchBtn.setAttribute('aria-pressed', String(on));
}

// Flip to ON once hero mostly out of view
const io = new IntersectionObserver(
  ([entry]) => setOn(entry.intersectionRatio < 0.85),
  { threshold: [0, 0.85, 1] }
);
io.observe(hero);

// Manual toggle (+ clicking the nudge)
if (switchBtn){
  switchBtn.addEventListener('click', () => setOn(!body.classList.contains('state-on')));
}
const nudge = document.querySelector('.nudge');
if (nudge){
  nudge.addEventListener('click', () => setOn(!body.classList.contains('state-on')));
}

// Correct initial state if page loads scrolled
setOn(window.scrollY > 6);
