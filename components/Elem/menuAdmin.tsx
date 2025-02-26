import type { Menu } from '@prisma/client';
import Image from 'next/image';
import classes from './meal-list.module.css';

async function addMenu(event: Event, needReload: () => void) {
  event.preventDefault();
  const
    form = event.target as HTMLFormElement,
    formData = new FormData(form),
    data = Object.fromEntries(formData.entries());
  // console.log('addGrade', data);
  await fetch('/api/menu', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  needReload();
}

export function MenuAdmin({ menuMeal, needReload }: { menuMeal: Menu[], needReload: () => void }) {
  return <>
    <h3>Добавить новое блюдо:</h3>
    <form onSubmit={evt => addMenu(evt, needReload)}>
      Название <input type="string" name="name" />
      <br />
      Калорийность <input type="number" name="energy" />
      <br />
      Ингридиенты <input type="string" name="ingredients" />
      <br />
      Фото<input type="string" name="photo" /><br />
      Рецепт<input type="string" name="Recipe" /><br />
      Номер приема пищи<input type="number" min="1" max="4" name="mealId" /><br />
      <button type="submit">add</button>
    </form>

    <ul className={classes.meal}>
      {menuMeal?.map(menuMeal => <li key={menuMeal.id}><p>{menuMeal.name}</p><p>КБЖУ:{menuMeal.energy}</p>
        <Image src={"/" + menuMeal?.photo} width={200} height={200} alt="Picture of the author" />
        <br /> Рецепт: <p>{menuMeal.Recipe}</p>
      </li>)}
    </ul>
  </>;
}