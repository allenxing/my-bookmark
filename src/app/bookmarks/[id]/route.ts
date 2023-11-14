import { NextRequest,NextResponse } from "next/server";
import { kv } from '@vercel/kv';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const lastUpdated = await kv.get(`${id}_lastUpdated`);
  const version = await kv.get(`${id}_version`);
  const bookmarks = await kv.get(`${id}`) || '';
  return NextResponse.json({
    bookmarks,
    version,
    lastUpdated,
  });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  console.log('id');
  const jsonBody = await request.json();
  if (!jsonBody.bookmarks) {
    return NextResponse.json({ error: 'missing bookmarks input' }, { status: 500 });
  }
  if (!jsonBody.lastUpdated) {
    return NextResponse.json({ error: 'missing lastUpdated input' }, { status: 500 });
  }
  const lastUpdatedInDB = await kv.get(`${id}_lastUpdated`)
  if (lastUpdatedInDB !== jsonBody.lastUpdated) {
    return NextResponse.json({ error: 'A sync conflict was detected' }, { status: 500 });
  }
  const newLastUpdated = new Date().toISOString()
  await kv.set(`${id}`, jsonBody.bookmarks)
  await kv.set(`${id}_lastUpdated`, newLastUpdated)
  return NextResponse.json({ lastUpdated: newLastUpdated });
}
