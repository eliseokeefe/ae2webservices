<script>
  let { data } = $props();
</script>

<div class="p-8">
  <a href="/search" class="text-[#4a7a8a] hover:underline mb-4 block">← Back to search</a>
  
  <h1 class="text-3xl font-light mb-6">Sites in {data.group}</h1>

  <div class="bg-[#4a7a8a] rounded-2xl p-6 flex flex-col gap-3">
    {#each data.sites as site}
      <div class="bg-white rounded-xl p-4 flex items-center justify-between">
        <div>
          <h2 class="text-[#4a7a8a] font-medium">{site['@SiteName']}</h2>
          <p class="text-gray-500 text-sm">{site['@SiteType']}</p>
        </div>
        <div class="flex gap-3">
          <a href="/sites/{site['@SiteCode']}?name={encodeURIComponent(site['@SiteName'])}&group={data.group}" class="bg-[#4a7a8a] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#3d6575] no-underline">View details</a>
          <form method="POST" action="?/track">
            <input type="hidden" name="site_code" value={site['@SiteCode']} />
            <input type="hidden" name="site_name" value={site['@SiteName']} />
            <button type="submit" class="bg-white border-2 border-[#4a7a8a] text-[#4a7a8a] px-4 py-2 rounded-xl text-sm hover:bg-gray-50">Track</button>
          </form>
        </div>
      </div>
    {/each}
  </div>
</div>