const sarsButtons = document.querySelectorAll('.sars-btn');

sarsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transform = 'scale(0.97)';
    setTimeout(() => btn.style.transform = 'scale(1)', 200);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');

  if (!localStorage.getItem('cookiesAccepted')) {
    banner.style.display = 'flex';
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.style.display = 'none';
  });
});
