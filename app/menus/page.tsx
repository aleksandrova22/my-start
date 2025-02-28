import { auth } from '@/auth';
import { GetMenus } from '@/components/Elem/get-menus';
import { getRole } from '@/lib/role';
export default async function PageMenus() {
  const 
    session = await auth(),
    role = await getRole(session);
    console.log('role',role);
  return <>
    <h1>Рецепты к рассчетом КБЖУ</h1>
    <GetMenus role={role} />
  </>;
}