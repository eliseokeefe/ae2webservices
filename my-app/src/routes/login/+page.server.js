import db from '$lib/server/db.js';
import bcrypt from 'bcrypt';
import { redirect } from '@sveltejs/kit';

export const actions = {
  register: async ({ request, cookies }) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const password = await bcrypt.hash(data.get('password'), 10);
    db.prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)').run(name, email, password);
    throw redirect(303, '/');
  },
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);

    if (!user) return { error: 'No account found with that email' };

    const valid = await bcrypt.compare(password, user.password);
    
    if (!valid) return { error: 'Incorrect password' };

    cookies.set('user_id', user.id, { path: '/', httpOnly: true });
    throw redirect(303, '/');
  }
};