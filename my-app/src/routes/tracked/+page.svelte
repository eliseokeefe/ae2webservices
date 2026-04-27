<script>
  let { data } = $props();
  let filterType = $state('');
  let filterOwner = $state('');

  let filtered = $derived(data.sites.filter(site => {
    const matchType = filterType === '' || site.siteType === filterType;
    const matchOwner = filterOwner === '' || site.dataOwner === filterOwner;
    return matchType && matchOwner;
  }));

  let siteTypes = $derived([...new Set(data.sites.map(s => s.siteType))]);
  let dataOwners = $derived([...new Set(data.sites.map(s => s.dataOwner))]);
</script>

<h1>My Tracked Sites</h1>
<a href="/search">Search for more sites</a>

{#if data.sites.length === 0}
  <p>You haven't tracked any sites yet</p>
{:else}
 <div>
    <label>Filter by site type:
      <select bind:value={filterType}>
        <option value="">All</option>
        {#each siteTypes as type}
        <option value={type}>{type}</option>
        {/each}
      </select>
    </label>

    <label>Filter by data owner:
      <select bind:value={filterOwner}>
        <option value="">All</option>
        {#each dataOwners as owner}
        <option value={owner}>{owner}</option>
        {/each}
      </select>
    </label>
  </div>

  {#each filtered as site}
    <div>
      <h2>{site.site_name}</h2>
      <p>Type: {site.siteType}</p>
      <p>Owner: {site.dataOwner}</p>
      <p>Manager: {site.dataManager}</p>
      <a href="/sites/{site.site_code}?group={site.group_name}">View details</a>
      
      <form method="POST" action="?/remove">
        <input type="hidden" name="site_code" value={site.site_code} />
        <button type="submit">Remove</button>
      </form>
    </div>
  {/each}
{/if}