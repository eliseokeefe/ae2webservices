<script>
  let { data } = $props();
</script>

<h1>My Tracked Sites</h1>

<a href="/search">Search for more sites</a>

{#if data.sites.length === 0}
  <p>You haven't tracked any sites yet.</p>
{:else}
  {#each data.sites as site}
    <div>
      <h2>{site.site_name}</h2>
     <a href="/sites/{site.site_code}?group={site.group_name}">View details</a>
    </div>
  {/each}
{/if}