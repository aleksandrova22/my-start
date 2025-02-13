import type { Menu } from '@prisma/client';
import Image from 'next/image';
import classes from './meal-list.module.css';



export function MenuMeals({ menuMeal }: { menuMeal: Menu[] }) {
  return <ul className={classes.meal}>
        {menuMeal?.map(menuMeal => <li key={menuMeal.id}><p>{menuMeal.name}</p><p>КБЖУ:{menuMeal.energy}</p>
              <Image src={"/" + menuMeal?.photo} width={200} height={200} alt="Picture of the author" />
              <br/> Рецепт: <p>{menuMeal.Recipe}</p>
{/* <button onClick={getAllMenuByMealId(meal.id)}/> */}
        </li>)}
  </ul>

}



