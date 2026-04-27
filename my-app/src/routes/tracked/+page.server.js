import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
  const userId = cookies.get('user_id');
  if (!userId) throw redirect(303, '/login');

  const sites = db.prepare('SELECT * FROM tracked_sites WHERE user_id = ?').all(userId);
  return { sites };
}

export const actions = {
  remove: async ({ request, cookies }) => {
    const userId = cookies.get('user_id');
    if (!userId) throw redirect(303, '/login');

    const data = await request.formData();
    const site_code = data.get('site_code');

    db.prepare('DELETE FROM tracked_sites WHERE user_id = ? AND site_code = ?')
      .run(userId, site_code);

    return { success: true };
  }
};