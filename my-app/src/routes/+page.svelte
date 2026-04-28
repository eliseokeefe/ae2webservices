<script>
  let { data } = $props();
</script>
{#if data.user}
  <div class="p-8">
    <h1 class="text-3xl font-light mb-6">Dashboard</h1>
    <div class="bg-[#4a7a8a] rounded-2xl p-6">
      {#if data.sites.length === 0}
        <p class="text-white">You haven't tracked any sites yet. <a href="/search" class="underline text-white">Search for sites to get started.</a></p>
      {:else}
        {#each data.sites as site}
          <a href="/sites/{site.site_code}?group={site.group_name}" class="block bg-white rounded-xl p-4 mb-3 text-[#4a7a8a] no-underline hover:bg-gray-50">
            {site.site_name}
          </a>
        {/each}
      {/if}
    </div>
  </div>
{:else}
  <div class="relative">
    <div class="bg-[#4a7a8a] bg-opacity-60 py-32 px-8 text-center">
      <h1 class="text-6xl font-light text-[#4a7a8a]">Air Quality Tracker</h1>
    </div>
    <div class="p-12 text-center">
      <p class="text-lg text-gray-600 mb-2">Welcome to the London Air Quality Tracker. On this website, you can create an account to find, track, and see details of sites.</p>
      <p class="text-gray-600 mb-8">Please sign in or register to proceed:</p>
      <div class="flex justify-center gap-6">
        <a href="/login" class="bg-[#4a7a8a] text-white px-10 py-3 rounded-xl hover:bg-[#3d6575] no-underline">Login</a>
        <a href="/login" class="bg-[#4a7a8a] text-white px-10 py-3 rounded-xl hover:bg-[#3d6575] no-underline">Register</a>
      </div>
    </div>
  </div>
{/if}

