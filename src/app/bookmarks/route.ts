import { NextRequest,NextResponse } from "next/server";
import { kv } from '@vercel/kv';

export async function POST(request: NextRequest) {
  const bid = hexUUID();
  const body = await request.json();
  const lastUpdated = new Date().toISOString();
  await kv.set(`${bid}_version`, body.version || '');
  await kv.set(`${bid}_lastUpdated`, lastUpdated);
  console.log(bid)
  return NextResponse.json({
    id: bid,
    lastUpdated,
    version: body.version || '1.0.0',
  })
}

const hexUUID = () => {
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return [...arr].map(x => x.toString(16).padStart(2, '0')).join('');
}