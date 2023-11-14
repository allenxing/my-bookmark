import { NextRequest,NextResponse } from "next/server";
import { kv } from '@vercel/kv';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const version = await kv.get(`${id}_version`);
  return NextResponse.json({
    version,
  });
}