<script>
  let { data } = $props();
  let filterType = $state('');
  let filterOwner = $state('');
  let showFilter = $state(false);

  let filtered = $derived(data.sites.filter(site => {
    const matchType = filterType === '' || site.siteType === filterType;
    const matchOwner = filterOwner === '' || site.dataOwner === filterOwner;
    return matchType && matchOwner;
  }));

  let siteTypes = $derived([...new Set(data.sites.map(s => s.siteType))]);
  let dataOwners = $derived([...new Set(data.sites.map(s => s.dataOwner))]);
</script>

<div class="p-8">
  <div class="flex items-center justify-between mb-2">
    <h1 class="text-3xl font-light">Tracked Sites</h1>
    <button onclick={() => showFilter = !showFilter} class="bg-white border-2 border-[#4a7a8a] text-[#4a7a8a] px-6 py-2 rounded-xl hover:bg-gray-50">
      Filter {showFilter ? '▲' : '▼'}
    </button>
  </div>

  <p class="text-gray-700 mb-4">Click a site to be taken to the site details page</p>

  {#if showFilter}
    <div class="bg-white border-2 border-[#4a7a8a] rounded-2xl p-4 mb-4 flex gap-6">
      <div class="flex-1">
        <label for="filter-type" class="text-gray-600 block mb-1 text-sm">Site type:</label>
        <select id="filter-type" bind:value={filterType} class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none">
          <option value="">All</option>
          {#each siteTypes as type}
            <option value={type}>{type}</option>
          {/each}
        </select>
      </div>
      <div class="flex-1">
        <label for="filter-owner" class="text-gray-600 block mb-1 text-sm">Data owner:</label>
        <select id="filter-owner" bind:value={filterOwner} class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none">
          <option value="">All</option>
          {#each dataOwners as owner}
            <option value={owner}>{owner}</option>
          {/each}
        </select>
      </div>
    </div>
  {/if}

  {#if data.sites.length === 0}
    <div class="bg-[#4a7a8a] rounded-2xl p-6">
      <p class="text-white">You haven't tracked any sites yet. <a href="/search" class="underline text-white">Search for sites to get started.</a></p>
    </div>
  {:else}
    <div class="bg-[#4a7a8a] rounded-2xl p-6 flex flex-col gap-3">
      {#each filtered as site}
        <div class="bg-white rounded-xl p-4 flex items-center justify-between">
          <div>
            <h2 class="text-[#4a7a8a] font-medium">{site.site_name}</h2>
            <p class="text-gray-700 text-sm">{site.siteType} · {site.dataOwner}</p>
          </div>
          <div class="flex gap-3">
            <a href="/sites/{site.site_code}?group={site.group_name}" class="bg-[#4a7a8a] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#3d6575] no-underline">View details</a>
            <form method="POST" action="?/remove">
              <input type="hidden" name="site_code" value={site.site_code} />
              <button type="submit" class="bg-white border-2 border-red-400 text-red-400 px-4 py-2 rounded-xl text-sm hover:bg-red-50">Remove</button>
            </form>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>