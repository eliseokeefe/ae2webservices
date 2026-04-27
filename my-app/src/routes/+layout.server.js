export async function load({ cookies }) {
  const userId = cookies.get('user_id');
  return { user: !!userId };
}