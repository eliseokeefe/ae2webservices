<script>import "../app.css";
import favicon from '$lib/assets/favicon.svg';
let { children, data } = $props();</script>

<svelte:head>
  <link rel="icon" href="{favicon}" />
</svelte:head>

<nav class="flex items-center justify-between px-8 py-4 bg-[#4a7a8a] text-white">
  <a href="/" class="text-2xl font-light tracking-wide text-white no-underline">☁ London Air</a>
  <div class="flex gap-8">
    <a href="/" class="text-white no-underline hover:underline">Home</a>
    {#if data.user}
      <a href="/search" class="text-white no-underline hover:underline">Site Search</a>
      <a href="/tracked" class="text-white no-underline hover:underline">Tracked Sites</a>
      <a href="/logout" class="text-white no-underline hover:underline">Logout</a>
    {:else}
      <a href="/login" class="text-white no-underline hover:underline">Login/Register</a>
    {/if}
  </div>
</nav>

<main class="min-h-screen bg-[#f0f4f6]">
{@render children()}
</main>
