// PRELOADER
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none"; // Esconde o preloader após 2 segundos
      content.style.display = "flex"; // Mostra o conteúdo
    }, 1500); // 2000ms = 2 segundos
  }
});

// ANIMAÇÕES

// Função para iniciar o observer
function observeElementVisibility(selector, className, threshold = 0.8) {
  // Cria uma instância do IntersectionObserver
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // Quando o elemento está visível na tela
        if (entry.isIntersecting) {
          entry.target.classList.add(className); // Adiciona a classe especificada
          observer.unobserve(entry.target); // Para de observar o elemento após ele ser visível
        }
      });
    },
    {
      threshold: threshold, // A animação será acionada quando a visibilidade atingir o valor do threshold (padrão: 0.8)
    }
  );

  // Selecione todos os elementos que correspondem ao seletor
  const elementsToObserve = document.querySelectorAll(selector);

  // Comece a observar os elementos
  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
}

// Chamada da função para observar elementos
observeElementVisibility(
  ".experiencia-vasti-container",
  "fade-in-bottom-2",
  0.8
);
observeElementVisibility(".vantagens-vasti", "fade-in-bottom-2", 0.3);
observeElementVisibility(".container-categorias", "fade-in-bottom-2", 0.8);
observeElementVisibility(".fade-in-right", "visible-right", 0.8);
