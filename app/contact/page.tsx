import { auth } from '@/auth';
import { DemoUsers } from '@/components/Elem/demo-users';
import { getRole } from '@/lib/role';
import { prisma } from '@/prisma/prisma';

export default async function Page2() {
  const
    session = await auth(),
    role = await getRole(session),
    // if (!session?.user) return <div>Нужно войти как адми</div>;
    users = await prisma.user.findMany();
  if ((role === 'admin') && (session?.user)) {
    return <>
      <h1>Админ</h1>
      <hr />
      <h3>Перечень всех пользователей:</h3>
      {/* Server session = <ServerSession /> */}
      <div> <DemoUsers users={users} /> </div>
      {/* <div> <GetUsers role={role} /> </div> */}
    </>
  }
  return <div>Нужна авторизация администратора</div>
}