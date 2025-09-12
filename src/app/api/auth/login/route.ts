import { NextResponse } from 'next/server';

const HARDCODED_USER = { email: 'demo@demo.com', password: 'demo123' };

export async function POST(req: Request) {
  const { email, password } = await req.json().catch(() => ({}));

  if (email !== HARDCODED_USER.email || password !== HARDCODED_USER.password) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  // Generate a fake token (uuid here, JWT in real apps)
  const token = crypto.randomUUID();

  return NextResponse.json({ token });
}

