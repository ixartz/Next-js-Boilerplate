import { NextResponse } from 'next/server';

export function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('auth_token');
  response.cookies.delete('user_data');
  return response;
}
