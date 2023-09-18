const qAndA = document.querySelectorAll(".question-and-answer");

const selected = qAndA.forEach((num) => {
    num.addEventListener('click', () => {
        if (num.classList.contains("active")) {
            num.classList.remove('active');
        } else {
            num.classList.add('active');
        }
    });
});