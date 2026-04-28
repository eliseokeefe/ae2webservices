<script>
  let { data } = $props();

  function handleSelect(e) {
    const selected = e.target.value;
    if (selected) {
      window.location.href = `/search/${selected}`;
    }
  }
</script>


<div class="p-8">
  <h1 class="text-3xl font-light mb-6">Site Search</h1>
  
  <div class="bg-[#4a7a8a] rounded-2xl p-6">
    <label for="borough-select" class="text-white block mb-3">Select a borough:</label>
    <select id="borough-select" onchange={handleSelect} class="w-full rounded-xl px-4 py-3 text-gray-600 outline-none border-2 border-[#4a7a8a]">
      <option value="">Select a borough...</option>
      {#each data.groups as group}
        <option value={group['@GroupName']}>{group['@GroupName']}</option>
      {/each}
    </select>
  </div>
</div>