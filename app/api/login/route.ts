import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { compare } from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing email or password" },
        { status: 400 }
      );
    }

    // In a real app, validate against database
    // For now, return a mock success
    return NextResponse.json({ 
      success: true, 
      user: { 
        id: "1", 
        name: "Test User", 
        email: "user@example.com" 
      },
      message: "Login successful" 
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 