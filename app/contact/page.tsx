
import { auth } from '@/auth';
import { GetUsers } from '@/components/Elem/users';
//import {ServerSession } from '@/components/my-account';
import { prisma } from '@/prisma/prisma';

export default async function Page2() {
  const
    session = await auth();
  if (!session?.user) return <div>Список всех пользователей будет доступен после авторизации</div>;

  const
    users = await prisma.user.findMany();
  if ((session.user.email = 'lialia1986@mail.ru') || (session.user.email = 'materikin@gmail.com'))

    return <>
      <h1>Админ</h1>
          <hr />
          <h3>Перечень всех пользователей - доступен для админов</h3>
      {/* Server session = <ServerSession /> */}
      <div> <GetUsers users={users} /> </div>
    </>
}