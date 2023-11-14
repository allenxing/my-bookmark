import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.append("Content-Type", "Content-Type");
  response.headers.append("Access-Control-Allow-Methods", "GET, POST, PUT");
  response.headers.append("Access-Control-Allow-Origin", "chrome-extension://lcbjdhceifofjlpecfpeimnnphbcjgnc");
  response.headers.append("Access-Control-Allow-Headers", "Content-Type, Accept-Version");
  return response
}

export const config = {
  matcher: '/:path*',
}