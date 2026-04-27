<script>
  let { data } = $props();

  function handleSelect(e) {
    const selected = e.target.value;
    if (selected) {
      window.location.href = `/search/${selected}`;
    }
  }
</script>

<h1>Site Search</h1>

<select onchange={handleSelect}>
  <option value="">Select a borough...</option>
  {#each data.groups as group}
  <option value={group['@GroupName']}>{group['@GroupName']}</option>
  {/each}
</select>