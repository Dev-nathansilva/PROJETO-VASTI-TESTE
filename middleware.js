export default async function middleware(request) {
  const url = new URL(request.url);

  // Defina os slugs permitidos
  const allowedSlugs = ["/home", "/contato"];

  // Se o caminho não estiver entre os slugs permitidos, redirecione para /teste
  if (!allowedSlugs.includes(url.pathname)) {
    return Response.redirect("/teste.html", 308); // 308 é usado para redirecionamento permanente
  }

  return undefined; // Permite que o request prossiga normalmente para slugs permitidos
}
