// ===============================
//   CARGA DE SONIDO ORA ORA
// ===============================

const soundOra = new Audio("sounds/ora.mp3");
soundOra.volume = 1.0;


// ===============================
//   CAMBIO DE PREGUNTAS
// ===============================

function nextQuestion(num) {
    const current = document.getElementById("q" + num);
    current.classList.remove("active");

    if (num < 3) {
        const next = document.getElementById("q" + (num + 1));
        next.classList.add("active");
    } else {
        // Flash dramático estilo JoJo
        const flash = document.createElement("div");
        flash.classList.add("flash");
        document.body.appendChild(flash);

        // Mostrar el regalo con animación
        const regalo = document.getElementById("regalo");
        setTimeout(() => {
            regalo.classList.add("show");
        }, 300);
    }
}


// ===============================
//   BOTÓN ORA ORA
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const oraBtn = document.getElementById("oraButton");

    oraBtn.addEventListener("click", () => {
        // Reproducir sonido
        soundOra.currentTime = 0;
        soundOra.play();

        // Animación del botón
        oraBtn.classList.add("oraAttack");

        setTimeout(() => {
            oraBtn.classList.remove("oraAttack");
        }, 600);
    });
});
