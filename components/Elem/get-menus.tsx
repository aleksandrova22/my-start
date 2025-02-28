"use client";

import { useEffect, useState } from 'react';
import { Role } from '@/lib/role';
import { MenuUser } from './menuUser';
import { MenuAdmin } from './menuAdmin';


async function fetcher(url: string) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
}

export function GetMenus({ role }: { role: Role }) {
    const
        [error, setError] = useState<any>(null),
        [menuMeal, setMenuMeal] = useState(null),
        [loading, setLoading] = useState(true),
        [needReload, setNeedReload] = useState(0);
    // session = useSession(),
    useEffect(() => {
        fetchData();
        async function fetchData() {
            try {
                const result = await fetcher('/api/menu');
                setMenuMeal(result);
                setError(null);
                setLoading(false);
            } 
            catch (error) {
                console.error('error=', error);
                setError(error);
            }
        }
    }, [needReload]);

    if (error) return <div>Error: {error.message}</div>;
    if (loading) return <div>Loading...</div>;


    return <>
 
        {'admin' === role && <MenuAdmin menuMeal={menuMeal} needReload={() => setNeedReload(x => 1 + x)} />}
        {('user' === role || 'admin' === role) && <MenuUser menuMeal={menuMeal} />}
         {/* <MenuUser menuMeal={menuMeal} /> */}

    </>
}