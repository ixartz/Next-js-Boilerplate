import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/v1';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Invalid credentials' }));
    return NextResponse.json(
      { message: error.message ?? 'Invalid credentials' },
      { status: res.status },
    );
  }

  const data = (await res.json()) as unknown as {
    user: { id: string; name: string; email: string };
    tokens: { access: { token: string } };
  };
  const { user, tokens } = data;

  const isProduction = process.env.NODE_ENV === 'production';

  const response = NextResponse.json({ user });

  response.cookies.set('auth_token', tokens.access.token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60, // 1 hour
  });

  // Non-sensitive display data only (id, name, email)
  response.cookies.set(
    'user_data',
    JSON.stringify({ id: user.id, name: user.name, email: user.email }),
    {
      httpOnly: false,
      secure: isProduction,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60,
    },
  );

  return response;
}
