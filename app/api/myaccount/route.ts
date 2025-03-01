import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export async function GET() {
    const data = await auth();
    return NextResponse.json(data);
}