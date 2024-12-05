export async function middleware(req) {
  const url = req.nextUrl.clone();

  // Se a URL não for '/home' ou '/contato', redireciona para '/'
  if (!["/home", "/contato"].includes(url.pathname)) {
    url.pathname = "/"; // Redirecionar para a página inicial
    return Response.redirect(url, 301); // Redirecionamento permanente
  }

  // Caso contrário, mantém a URL como está
  return Response.next();
}
