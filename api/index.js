import server from '../dist/server/index.js';

export default async function handler(request) {
  return server.fetch(request);
}
