function nextQuestion(num) {
    const current = document.getElementById("q" + num);
    current.classList.remove("active");

    if (num < 3) {
        const next = document.getElementById("q" + (num + 1));
        next.classList.add("active");
    } else {
        // Flash dramático
        const flash = document.createElement("div");
        flash.classList.add("flash");
        document.body.appendChild(flash);

        // Mostrar regalo con animación
        const regalo = document.getElementById("regalo");
        setTimeout(() => {
            regalo.classList.add("show");
        }, 300);
    }
}

// Animación del botón ORA ORA
document.addEventListener("DOMContentLoaded", () => {
    const oraBtn = document.getElementById("oraButton");

    oraBtn.addEventListener("click", () => {
        oraBtn.classList.add("oraAttack");

        setTimeout(() => {
            oraBtn.classList.remove("oraAttack");
        }, 600);
    });
});
