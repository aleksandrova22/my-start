import { prisma } from '@/prisma/prisma';
import { auth } from '@/auth';
import { NextResponse, NextRequest } from 'next/server';
import type { Prisma } from '@prisma/client';
import { getRole } from '@/lib/role';


// общедоступное API
export async function GET(/* request: NextRequest */) {
  // console.log('request=', request);
  const
    session = await auth(),
    role = await getRole(session);
  // userId = session?.user?.id;

  if (!session?.user) return NextResponse.json({ error: 'Нужна авторизация' }, { status: 401 });
  const
    menus = await prisma.menu.findMany();
  return NextResponse.json(menus);
}

export async function POST(request: NextRequest) {
  const
    session = await auth(),
    role = await getRole(session),
    userId = session?.user?.id;
  console.log('POST API', { role, userId, user: session?.user });
  console.log('request=', request);
  switch (role) {
    case "admin":
      const
        { name, energy, ingredients, photo, Recipe, mealId } = await request.json();
      return NextResponse.json(
        await prisma.menu.create({
          data: {
            name: name,
            energy: +energy,
            ingredients: ingredients,
            photo: photo,
            Recipe: Recipe,
            mealId: +mealId
          }
        })
      );
    default:
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}