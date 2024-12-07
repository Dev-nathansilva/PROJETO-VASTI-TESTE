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

// CLIQUE NO CELULAR / VANTAGENS

document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".vantagem");

  containers.forEach((container) => {
    container.addEventListener("click", () => {
      containers.forEach((el) => el.classList.remove("active"));
      container.classList.add("active");
    });

    document.addEventListener("click", (event) => {
      if (!container.contains(event.target)) {
        container.classList.remove("active");
      }
    });
  });
});

// // ANIMAÇÕES

// // Função para iniciar o observer
// function observeElementVisibility(selector, className, threshold = 0.8) {
//   // Cria uma instância do IntersectionObserver
//   const observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         // Quando o elemento está visível na tela
//         if (entry.isIntersecting) {
//           entry.target.classList.add(className); // Adiciona a classe especificada
//           observer.unobserve(entry.target); // Para de observar o elemento após ele ser visível
//         }
//       });
//     },
//     {
//       threshold: threshold, // A animação será acionada quando a visibilidade atingir o valor do threshold (padrão: 0.8)
//     }
//   );

//   // Selecione todos os elementos que correspondem ao seletor
//   const elementsToObserve = document.querySelectorAll(selector);

//   // Comece a observar os elementos
//   elementsToObserve.forEach((element) => {
//     observer.observe(element);
//   });
// }

// // Chamada da função para observar elementos
// observeElementVisibility(
//   ".experiencia-vasti-container",
//   "fade-in-bottom-2",
//   0.1
// );
// observeElementVisibility(".vantagens-vasti", "fade-in-bottom-2", 0.1);
// observeElementVisibility(".container-categorias", "fade-in-bottom-2", 0.1);
// observeElementVisibility(".banner-image", "fade-in-bottom", 0.1);
// observeElementVisibility(".title-categorias", "fade-in-bottom-2", 0.1);
