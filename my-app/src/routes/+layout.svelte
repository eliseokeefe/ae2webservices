<script>
  import favicon from '$lib/assets/favicon.svg';
  let { children, data } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<nav>
  <a href="/">Home</a>
  {#if data.user}
    <a href="/search">Search</a>
    <a href="/tracked">Tracked Sites</a>
    <a href="/logout">Logout</a>
  {:else}
    <a href="/login">Login</a>
  {/if}
</nav>

{@render children()}