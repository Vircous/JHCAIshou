const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// 显示当前幻灯片
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// 上一页按钮
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// 下一页按钮
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// 初始化第一张幻灯片
showSlide(currentIndex);
