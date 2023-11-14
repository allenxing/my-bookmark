import { NextRequest,NextResponse } from "next/server";
const createNewBookmarksEnabled = true;
export async function GET(request: Request) {
  return NextResponse.json({ 
    maxSyncSize: 104857600,
    message: 'Welcome to xbrowsersync-cfw.',
    status: createNewBookmarksEnabled ? 1 : 3,
    version: '1.1.13',
  })
}