const headerMenuBtn = document.querySelector('.header-hamburger-menu');
const headerMenu = document.querySelector('.header-guide-sp-open');
const headerMainImg = document.querySelector('.hero-center-1 img');
const hamburgerBtn1 = document.querySelector('.header-guide-sp .header-hamburger-menu .hamburger-1');
const hamburgerBtn2 = document.querySelector('.header-guide-sp .header-hamburger-menu .hamburger-2');

function closeMenu() {
  headerMenu.classList.remove('active');
  hamburgerBtn1?.classList.remove('active');
  hamburgerBtn2?.classList.remove('active');
}

headerMenuBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  hamburgerBtn1.classList.toggle('active');
  hamburgerBtn2.classList.toggle('active');
});

headerMenu.addEventListener('click', (e) => {
  if (!e.target.closest('a') && !e.target.closest('button')) return;
  closeMenu();
});

document.addEventListener('click', (e) => {
  if (!headerMenu.classList.contains('active')) return;
  if (headerMenu.contains(e.target) || headerMenuBtn.contains(e.target)) return;
  closeMenu();
});

document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.about-slider');
  if (!sliderContainer) return;

  // 全ての .slider-top（pc-only / sp-only）に複製＋アニメーション適用
  sliderContainer.querySelectorAll('.slider-top').forEach((slider) => {
    const items = slider.innerHTML;
    slider.insertAdjacentHTML('beforeend', items);
    slider.classList.add('animating');
  });

  // 全ての .slider-bottom に複製＋アニメーション適用
  sliderContainer.querySelectorAll('.slider-bottom').forEach((slider) => {
    const items = slider.innerHTML;
    slider.insertAdjacentHTML('afterbegin', items);
    slider.classList.add('animating');
  });

  // ヘッダーの画像イーズアウト
  headerMainImg.classList.add('is-loaded');
  
  
});
