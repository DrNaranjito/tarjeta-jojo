function nextQuestion(num) {
    const current = document.getElementById("q" + num);
    current.classList.remove("active");

    if (num < 3) {
        const next = document.getElementById("q" + (num + 1));
        next.classList.add("active");
    } else {
        document.getElementById("regalo").style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const oraBtn = document.getElementById("oraButton");

    oraBtn.addEventListener("click", () => {
        oraBtn.classList.add("oraAttack");

        setTimeout(() => {
            oraBtn.classList.remove("oraAttack");
        }, 600);
    });
});
