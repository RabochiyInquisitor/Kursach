const btn =document.querySelector(".zapis"); /*помогает найти элемент*/
btn.addEventListener("click", () => {
    navigator.clipboard.writeText("+7 843 211-00-73");
    });
