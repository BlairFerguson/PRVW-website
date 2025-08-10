// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

const body = document.body;
const hero = document.getElementById('hero');
const switchBtn = document.getElementById('switch');

// Flip helper
function setOn(on){
  body.classList.toggle('state-on', on);
  body.classList.toggle('state-off', !on);
  if (switchBtn) switchBtn.setAttribute('aria-pressed', String(on));
}

// Flip when hero is mostly out of view
const io = new IntersectionObserver(
  ([entry]) => setOn(entry.intersectionRatio < 0.85),
  { threshold: [0, 0.85, 1] }
);
io.observe(hero);

// Manual toggle (button)
if (switchBtn){
  switchBtn.addEventListener('click', () => setOn(!body.classList.contains('state-on')));
}

// Nudge toggles too
const nudge = document.querySelector('.nudge');
if (nudge){
  nudge.addEventListener('click', () => setOn(!body.classList.contains('state-on')));
}

// Ensure correct on initial load (if page loads scrolled)
setOn(window.scrollY > 6);
