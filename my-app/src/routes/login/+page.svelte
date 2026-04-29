<script>
  let { form } = $props();
  let showRegister = $state(false);
</script>

<div class="min-h-screen flex flex-col items-center justify-center px-4">
  
  {#if showRegister}
    <h1 class="text-2xl font-light mb-6">Register</h1>
    <div class="bg-white border-2 border-[#4a7a8a] rounded-2xl p-8 w-full max-w-lg">
      <form method="POST" action="?/register" class="flex flex-col gap-6">
      <div>
          <label for="reg-name" class="text-gray-600 block mb-2">Name:</label>
          <input id="reg-email" type="name" name="name" required class="w-full border-2 border-[#4a7a8a] rounded-xl px-4 py-3 outline-none" />
        </div>
        <div>
          <label for="reg-email" class="text-gray-600 block mb-2">Email:</label>
          <input id="reg-email" type="email" name="email" required class="w-full border-2 border-[#4a7a8a] rounded-xl px-4 py-3 outline-none" />
        </div>
        <div>
          <label for="reg-password" class="text-gray-600 block mb-2">Password:</label>
          <input id="reg-password" type="password" name="password" required class="w-full border-2 border-[#4a7a8a] rounded-xl px-4 py-3 outline-none" />
        </div>
        <button type="submit" class="bg-[#4a7a8a] text-white px-10 py-3 rounded-xl hover:bg-[#3d6575]">Register</button>
      </form>
    </div>
    <p class="mt-4 text-gray-700">Already have an account?</p>
    <button onclick={() => showRegister = false} class="mt-2 bg-[#4a7a8a] text-white px-10 py-3 rounded-xl hover:bg-[#3d6575]">Login</button>

  {:else}
    <h1 class="text-2xl font-light mb-6">Login</h1>
    <div class="bg-white border-2 border-[#4a7a8a] rounded-2xl p-8 w-full max-w-lg">
      <form method="POST" action="?/login" class="flex flex-col gap-6">
        <div>
          <label for="login-email" class="text-gray-600 block mb-2">Email:</label>
          <input id="login-email" type="email" name="email" required class="w-full border-2 border-[#4a7a8a] rounded-xl px-4 py-3 outline-none" />
        </div>
        <div>
          <label for="login-password" class="text-gray-600 block mb-2">Password:</label>
          <input id="login-password" type="password" name="password" required class="w-full border-2 border-[#4a7a8a] rounded-xl px-4 py-3 outline-none" />
        </div>
        <button type="submit" class="bg-[#4a7a8a] text-white px-10 py-3 rounded-xl hover:bg-[#3d6575]">Login</button>
      </form>
    </div>
    <p class="mt-4 text-gray-700">Don't have an account?</p>
    <button onclick={() => showRegister = true} class="mt-2 bg-[#4a7a8a] text-white px-10 py-3 rounded-xl hover:bg-[#3d6575]">Register</button>
  {/if}

  {#if form?.error}
    <p class="mt-4 text-red-500">{form.error}</p>
  {/if}
</div>