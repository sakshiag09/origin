import { NextResponse } from "next/server";

export async function GET() {
  try {
    // In a real app, get user from session
    // For now, return a mock user
    return NextResponse.json({ 
      success: true, 
      user: { 
        id: "1", 
        name: "Test User", 
        email: "user@example.com" 
      }
    });
  } catch (error) {
    console.error("User fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 