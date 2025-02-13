import type { Meal } from '@prisma/client';
import Image from 'next/image';
import classes from './meal-list.module.css';

// async function getAllMenuByMealId(mealId: number) => {
//       try {
//         const menuByMeal = await prisma.menu.findMany({
//           where: {
//             mealId
//           },
//         })
//         return <MenuMeals menuMeal = {menuByMeal}/>
//       } catch(error) {
//         Error(error);
//       }
//     }


export function MealList({ meals }: { meals: Meal[] }) {
      return <div className={classes.meal}>
            {meals?.map(meal => <div key={meal.id}><p>{meal.title}</p>
                  <button >  <Image src={"/" + meal?.img} width={200} height={200} alt="Picture of the author" />
                  </button>
            </div>)}
      </div>

}




// async function getAllMenuByMealId(mealId: number) {
//       try {
//         const menuByMeal = await prisma.menu.findMany({
//           where: {
//             mealId
//           }
//         })
//         return menuByMeal
//       } catch(e) {
//         Error(e)
//       }
//     }