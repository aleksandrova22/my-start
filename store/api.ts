import { createFetcherStore } from './fetcher';
import type { Menu } from '@prisma/client';

export const $myaccount = createFetcherStore(['/api/myaccount/']);
 export const $menus = createFetcherStore<Menu[]>(['/api/menu/']);
//export const $students = createFetcherStore<Meal[]>(['/api/student/']);