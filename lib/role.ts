import { Session } from 'next-auth';
import { prisma } from "@/prisma/prisma";


const
    roles = ["admin", "user", "guest"] as const;

export type Role = typeof roles[number] | undefined | null;

// export function getRole(session: Session | null) {
//     if ('admin' === session?.user?.role)
//         return "admin";
//     const
//         userId = session?.user?.id;
//     if (!userId) return null;
//     if ('1' === userId) return "admin";
//     // if ('user' === session?.user?.role )
//     if (userId) return "user";
//     return null;
// }


export async function getRole(session: Session | null): Promise<Role> {
    if ('admin' === session?.user?.role)
      return "admin";
    const
      userId = session?.user?.id;
    if (!userId) return null;
    if (await prisma.user.findFirst({ where: { id: userId } }))
      return "user";
   
    return null;
  }