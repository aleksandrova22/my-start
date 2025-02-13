import { prisma } from '@/prisma/prisma';
import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import type { Prisma } from '@prisma/client';


// общедоступное API
// export async function GET() {
 

//   return NextResponse.json(
//     await prisma.menu.findMany()
//   );
// }




// общедоступное API
export async function GET(/* request: NextRequest */) {
  // console.log('request=', request);
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const
    menus= await prisma.menu.findMany();
  
  return NextResponse.json( menus);

}