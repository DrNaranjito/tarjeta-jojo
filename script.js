// ===============================
//   CARGA DE SONIDOS
// ===============================

// Sonido ORA ORA
const soundOra = new Audio("sounds/ora.mp3");
soundOra.volume = 1.0;

// Sonido OI JOSUKE
const soundJosuke = new Audio("sounds/oijosuke.mp3");
soundJosuke.volume = 1.0;


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
//   BOTONES DE SONIDO
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Botón ORA ORA
    const oraBtn = document.getElementById("oraButton");
    if (oraBtn) {
        oraBtn.addEventListener("click", () => {
            soundOra.currentTime = 0;
            soundOra.play();

            oraBtn.classList.add("oraAttack");
            setTimeout(() => oraBtn.classList.remove("oraAttack"), 600);
        });
    }

    // Botón OI JOSUKE (si existe)
    const josukeBtn = document.getElementById("josukeButton");
    if (josukeBtn) {
        josukeBtn.addEventListener("click", () => {
            soundJosuke.currentTime = 0;
            soundJosuke.play();

            josukeBtn.classList.add("oraAttack");
            setTimeout(() => josukeBtn.classList.remove("oraAttack"), 600);
        });
    }

});
