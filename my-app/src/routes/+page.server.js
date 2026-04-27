import db from '$lib/server/db.js';

export async function load({ cookies }) {
  const userId = cookies.get('user_id');
  if (!userId) {
    return { user: false, sites: [] };
  }

  const sites = db.prepare('SELECT * FROM tracked_sites WHERE user_id = ?').all(userId);

  return { user: true, sites };
}