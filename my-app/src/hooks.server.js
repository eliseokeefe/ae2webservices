import { redirect } from '@sveltejs/kit';

const protectedRoutes = ['/search', '/tracked', '/sites'];

export async function handle({ event, resolve }) {
  const userId = event.cookies.get('user_id');
  const isProtected = protectedRoutes.some(route => event.url.pathname.startsWith(route));

  if (isProtected && !userId) {
    throw redirect(303, '/login');
  }

  return resolve(event);
}