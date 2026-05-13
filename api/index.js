export default async function handler(request) {
  // Temporary test - return simple HTML while we debug
  return new Response('<h1>NOW-WOM Project</h1><p>API is working</p>', {
    status: 200,
    headers: { 'Content-Type': 'text/html' }
  });
}
