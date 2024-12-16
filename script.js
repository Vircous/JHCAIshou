const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// 显示当前幻灯片
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        slide.style.transform = `translateY(${(i - index) * 100}%)`;
    });
}

// 点击显示正文
document.querySelectorAll('.content').forEach(content => {
    content.addEventListener('click', () => {
        const text = content.querySelector('.text');
        if (text) text.classList.add('visible');
    });
});

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

showSlide(currentIndex);




