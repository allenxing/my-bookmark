import { NextRequest, NextResponse } from "next/server";

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({ 
    message: '',
  });
}
