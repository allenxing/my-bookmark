import { NextRequest,NextResponse } from "next/server";
import { kv } from '@vercel/kv';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const lastUpdated = await kv.get(`${id}_lastUpdated`);
  return NextResponse.json({
    lastUpdated,
  });
}