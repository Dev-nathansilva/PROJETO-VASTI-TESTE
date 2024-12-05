// Adiciona um atraso de 2 segundos antes de exibir o conteúdo
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  setTimeout(() => {
    preloader.style.display = "none"; // Esconde o preloader após 2 segundos
    content.style.display = "flex"; // Mostra o conteúdo
  }, 1500); // 2000ms = 2 segundos
});
