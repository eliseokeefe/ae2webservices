import db from '$lib/server/db.js';
import { redirect, error } from '@sveltejs/kit';

export async function load({ params, url, cookies }) {
  const userId = cookies.get('user_id');
  const group = url.searchParams.get('group');

  if (!group) throw error(400, 'No group specified');

  const response = await fetch(`https://api.erg.ic.ac.uk/AirQuality/Annual/MonitoringObjective/GroupName=${group}/Json`);
  
  if (!response.ok) throw error(500, 'Could not load site data. The API may be unavailable.');

  const data = await response.json();
  
  const sites = data.SiteObjectives.Site;
  const site = sites.find(s => s['@SiteCode'] === params.code);

  if (!site) throw error(404, 'Site not found');

  const objectives = site.Objective;
  const isTracked = userId ? db.prepare('SELECT * FROM tracked_sites WHERE user_id = ? AND site_code = ?').get(userId, params.code) : null;

  return {
    site,
    objectives: Array.isArray(objectives) ? objectives : [objectives],
    code: params.code,
    group,
    isTracked: !!isTracked
  };
}

export const actions = {
  track: async ({ request, cookies, params, url }) => {
    const userId = cookies.get('user_id');
    if (!userId) throw redirect(303, '/login');
    const group = url.searchParams.get('group');
    const data = await request.formData();
    db.prepare('INSERT OR IGNORE INTO tracked_sites (user_id, site_code, site_name, group_name) VALUES (?, ?, ?, ?)')
      .run(userId, params.code, data.get('site_name'), group);
    return { success: true };
  },
  remove: async ({ cookies, params }) => {
    const userId = cookies.get('user_id');
    if (!userId) throw redirect(303, '/login');
    db.prepare('DELETE FROM tracked_sites WHERE user_id = ? AND site_code = ?')
      .run(userId, params.code);
    return { success: true };
  }
};