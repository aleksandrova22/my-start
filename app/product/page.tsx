//import { signIn, signOut, auth } from "@/auth";
import { prisma } from '@/prisma/prisma';
import { MealList } from '@/components/Elem/meal-list';

//без авторизации
export default async function PageMenu() {
  const
    meals = await prisma.meal.findMany();

  return <>
    <h2>Выберите прием пищи</h2>
    <MealList meals={meals} />
  </>
}

