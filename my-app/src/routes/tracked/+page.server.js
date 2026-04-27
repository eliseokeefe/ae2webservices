import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
  const userId = cookies.get('user_id');

  if (!userId) throw redirect(303, '/login');

  const sites = db.prepare('SELECT * FROM tracked_sites WHERE user_id = ?').all(userId);
  const sitesWithDetails = await Promise.all(sites.map(async (site) => {
    const response = await fetch(`https://api.erg.ic.ac.uk/AirQuality/Annual/MonitoringObjective/GroupName=${site.group_name}/Json`);
    const data = await response.json();
    const allSites = data.SiteObjectives.Site;
    const details = allSites.find(s => s['@SiteCode'] === site.site_code);
    return {
      ...site,
      siteType: details?.['@SiteType'] ?? 'Unknown',
      dataOwner: details?.['@DataOwner'] ?? 'Unknown',
      dataManager: details?.['@DataManager'] ?? 'Unknown'
    };
  }));

  return { sites: sitesWithDetails };
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