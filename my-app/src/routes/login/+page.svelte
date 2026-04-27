<script>
  let { form } = $props();
</script>

<h1>Login or Register</h1>
<h2>Register</h2>
<form method="POST" action="?/register">
  <label>Email <input type="email" name="email" required /></label>
  <label>Password <input type="password" name="password" required /></label>
  <button type="submit">Register</button>
</form>

<h2>Login</h2>
<form method="POST" action="?/login">
  <label>Email <input type="email" name="email" required /></label>
  <label>Password <input type="password" name="password" required /></label>
  <button type="submit">Login</button>
</form>