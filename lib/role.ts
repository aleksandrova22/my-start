import { Session } from 'next-auth';
import { prisma } from "@/prisma/prisma";



const
    roles = ["admin", "user", "guest"] as const;

export type Role = typeof roles[number] | null;

export function getRole(session: Session | null) {
    if ('admin' === session?.user?.role)
        return "admin";
    const
        userId = session?.user?.id;
    if (!userId) return null;
    if ('user' === session?.user?.role)
        return "user";

    return null;
}