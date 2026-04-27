<script>
  let { data } = $props();
</script>

{#if data.user}
  <h1>Welcome back!</h1>
  <a href="/search">Search for sites</a>
  <a href="/tracked">View all tracked sites</a>
  <a href="/logout">Logout</a>
  <h2>Your Tracked Sites</h2>
  {#if data.sites.length === 0}
    <p>You haven't tracked any sites yet. <a href="/search">Search for sites to get started.</a></p>
  {:else}
    {#each data.sites as site}
      <div>
        <h3>{site.site_name}</h3>
        <a href="/sites/{site.site_code}?group={site.group_name}">View details</a>
      </div>
    {/each}
  {/if}
{:else}
  <h1>London Air Quality Monitor</h1>
  <p>Track air pollution sensors across London boroughs.</p>
  <a href="/login">Login or register to get started</a>
{/if}