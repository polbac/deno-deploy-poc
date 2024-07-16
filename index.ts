function handler(req: Request): Response {
  return new Response("Hello world", {
    status: 200,
  });
}

Deno.serve(handler);
