import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "This is a GET response" });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({ message: "Received POST", data: body });
}