import './style.css';

const burgerBtn = document.getElementById('burger-btn');
const navLinks = document.getElementById('nav-links');

burgerBtn.addEventListener('click', () => {
  const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';

  burgerBtn.setAttribute('aria-expanded', String(!isExpanded));

  if (navLinks.classList.contains('hidden')) {
    navLinks.classList.remove('hidden');
    navLinks.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'right-0', 'bg-yellow-200', 'w-full', 'p-4', 'shadow-md', 'md:shadow-none');
  } else {
    navLinks.classList.add('hidden');
    navLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'right-0', 'bg-yellow-200', 'w-full', 'p-4', 'shadow-md', 'md:shadow-none');
  }
});
