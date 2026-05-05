import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/v1';

export async function POST(request: NextRequest) {
  const { name, email, password } = await request.json();

  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Registration failed' }));
    return NextResponse.json(
      { message: error.message ?? 'Registration failed' },
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
