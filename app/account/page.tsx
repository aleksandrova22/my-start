import { auth } from '@/auth';
import { MenuMeals } from '@/components/Elem/menuMeal-list';
//import {ServerSession } from '@/components/my-account';
import { prisma } from '@/prisma/prisma';

export default async function Page() {
  const
    session = await auth();
  if (!session?.user) return <div>Нужно авторизироваться</div>;
  const
    menuMeal = await prisma.menu.findMany();
  return <>
    <h1>Меню</h1>
    Your session = {JSON.stringify(session)}
    <hr />
    {/* Server session = <ServerSession /> */}

    <div> <MenuMeals menuMeal={menuMeal} /> </div>

  </>
}

