<script>
  let { data } = $props();
</script>

<h1>Sites in {data.group}</h1>
<a href="/search">Back to search</a>

{#each data.sites as site}
  <div>
    <h2>{site['@SiteName']}</h2>
    <p>{site['@SiteType']}</p>
    <a href="/sites/{site['@SiteCode']}?name={encodeURIComponent(site['@SiteName'])}&group={data.group}">View details</a>
    <form method="POST" action="?/track">
      <input type="hidden" name="site_code" value={site['@SiteCode']} />
      <input type="hidden" name="site_name" value={site['@SiteName']} />
      <button type="submit">Track this site</button>
    </form>
  </div>
{/each}