<script>
  let { data } = $props();
</script>
<div class="p-8">
  <a href="/search/{data.group}" class="text-[#4a7a8a] hover:underline mb-4 block">← Back to search</a>

  <div class="flex items-center justify-between mb-6">
    <h1 class="text-3xl font-light">{data.site['@SiteName']}</h1>
   {#if data.isTracked}
  <form method="POST" action="?/remove">
    <input type="hidden" name="group" value={data.group} />
    <button type="submit" class="bg-white border-2 border-red-400 text-red-400 px-6 py-2 rounded-xl hover:bg-red-50">Remove from tracked</button>
  </form>
    {:else}
      <form method="POST" action="?/track">
        <input type="hidden" name="site_name" value={data.site['@SiteName']} />
        <button type="submit" class="bg-[#4a7a8a] text-white px-6 py-2 rounded-xl hover:bg-[#3d6575]">Add to tracked</button>
      </form>
    {/if}
  </div>

  <p class="text-gray-500 mb-6">Type: {data.site['@SiteType']}</p>

  <h2 class="text-xl font-light mb-4">Pollution species measured: </h2>

  <div class="bg-[#4a7a8a] rounded-2xl p-6">
    <div class="flex px-4 py-3 text-white font-medium">
      <span class="flex-1">Site</span>
      <span class="flex-1">Pollution</span>
      <span class="flex-1">Objective</span>
    </div>
    <div class="bg-white rounded-xl overflow-hidden border-2 border-white">
   <table class="w-full text-sm">
        <tbody>
          {#each data.objectives as obj}
            <tr class="border-b border-gray-100">
              <td class="px-4 py-3 text-gray-600">{data.site['@SiteName']}</td>
              <td class="px-4 py-3 text-gray-600">{obj['@SpeciesCode']}</td>
              <td class="px-4 py-3 text-gray-600">{obj['@ObjectiveName']}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>