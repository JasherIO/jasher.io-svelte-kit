/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const response = await resolve(event);
  response.headers.set('Cache-Control', 'max-age: 300, s-maxage=300, stale-while-revalidate=600, stale-if-error: 3600');

  return response;
}