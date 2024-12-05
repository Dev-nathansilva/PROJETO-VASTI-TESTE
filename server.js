const express = require("express");
const path = require("path");

const app = express();

// Define a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rota principal ("/")
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "home.html"));
});

// Rota amigável dinâmica ("/:slug")
app.get("/:slug", (req, res) => {
  const slug = req.params.slug;
  const filePath = path.join(__dirname, "public", "pages", `${slug}.html`);

  res.sendFile(filePath, (err) => {
    if (err) {
      res.redirect("/"); // Redireciona para a página inicial se o arquivo não existir
    }
  });
});

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
