<script>
  let { data } = $props();
</script>

<a href="/search/{data.group}">Back to search</a>
<h1>{data.site['@SiteName']}</h1>
<p>Type: {data.site['@SiteType']}</p>

{#if data.isTracked}
  <form method="POST" action="?/remove">
  <button type="submit">Remove from tracked sites</button>
  </form>
{:else}
  <form method="POST" action="?/track">
  <input type="hidden" name="site_name" value={data.site['@SiteName']} />
  <button type="submit">Add to tracked sites</button>
  </form>
{/if}

<h2>Pollution species</h2>

{#each data.objectives as obj}
  <div>
    <h3>{obj['@SpeciesCode']}</h3>
    <p>Objective: {obj['@ObjectiveName']}</p>
    <p>Value: {obj['@Value']}</p>
  </div>
{/each}