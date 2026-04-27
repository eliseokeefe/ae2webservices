export async function load({ params, url, cookies }) {
  const userId = cookies.get('user_id');
  const group = url.searchParams.get('group');

  const response = await fetch(`https://api.erg.ic.ac.uk/AirQuality/Annual/MonitoringObjective/GroupName=${group}/Json`);
  const data = await response.json();

  const sites = data.SiteObjectives.Site;
  const site = sites.find(s => s['@SiteCode'] === params.code);
  const objectives = site.Objective;

  return {
    site,
    objectives: Array.isArray(objectives) ? objectives : [objectives],
    code: params.code,
    userId
  };
}