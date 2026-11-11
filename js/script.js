let fontscale = 1;

function announce(message) {
    if (status) status.textContent = message;
  }

function setFontScale(scale) {
  fontscale = Math.min(1.5 , Math.max(0.85, scale))
  document.documentElement.style.setProperty("--font-scale" ,fontscale);
  announce(`Tamanho do texto ajustado para ${Math.round(fontscale * 100)} Por cento.`);
}

document.querySelector("#increaseFont").addEventListener("click", () => setFontScale(fontscale + 0.1));
document.querySelector("#decreaseFont").addEventListener("click", () => setFontScale(fontscale - 0.1));
document.querySelector("#resetFont").addEventListener("click", () => setFontScale(1));

function alterarTema(tema) {
    document.body.classList.remove("tema-escuro","tema-contraste");

    if (tema === "escuro") {
        document.body.classList.add("tema-escuro");
    }

    if (tema === "contraste") {
        document.body.classList.add("tema-contraste");
    }
}