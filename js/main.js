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
});
