<script>
  let { data } = $props();
</script>

<a href="/search">Back to search</a>

<h1>{data.site['@SiteName']}</h1>
<p>Type: {data.site['@SiteType']}</p>

<h2>Pollution species measured here</h2>

{#each data.objectives as obj}
  <div>
    <h3>{obj['@SpeciesCode']}</h3>
    <p>Objective: {obj['@ObjectiveName']}</p>
    <p>Value: {obj['@Value']}</p>
  </div>
{/each}