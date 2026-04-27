import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const response = await fetch(`http://api.erg.ic.ac.uk/AirQuality/Annual/MonitoringObjective/GroupName=${params.group}/Json`);
  const data = await response.json();
  const sites = data.SiteObjectives.Site;
  return { sites, group: params.group };
}

export const actions = {
 track: async ({ request, cookies, params }) => {
    const userId = cookies.get('user_id');
    
    if (!userId) throw redirect(303, '/login');

    const data = await request.formData();
    const site_code = data.get('site_code');
    const site_name = data.get('site_name');

    db.prepare('INSERT OR IGNORE INTO tracked_sites (user_id, site_code, site_name, group_name) VALUES (?, ?, ?, ?)')
      .run(userId, site_code, site_name, params.group);

    return { success: true };
  
  }
};