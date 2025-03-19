import { auth } from "@/auth"
import { NextResponse } from "next/server";

export async function GET() {
  await auth();
  
  return NextResponse.json({ 
    status: "success", 
    message: "Auth API route is working" 
  });
}

export async function POST() {
  await auth();
  
  return NextResponse.json({ 
    status: "success", 
    message: "Auth API route is working" 
  });
} 