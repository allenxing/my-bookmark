import { NextRequest,NextResponse } from "next/server";
import { kv } from '@vercel/kv';

export async function OPTIONS(request: Request) {
  return NextResponse.json({ 
    message: '',
  });
}