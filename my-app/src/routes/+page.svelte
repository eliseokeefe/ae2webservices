<script>
  let { data } = $props();
</script>

{#if data.user}
  <h1>Welcome back!</h1>
  <p>Your dashboard will appear here.</p>
  <a href="/search">Search for sites</a>
{:else}
  <h1>London Air Quality Monitor</h1>
  <p>Track air pollution sensors across London boroughs.</p>
  <a href="/login">Login or register to get started</a>
{/if}