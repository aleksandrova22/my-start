import type { User } from '@prisma/client';
import Image from 'next/image';



export function DemoUsers({ users }: { users: User[] }) {
      return <ul >
            {users?.map(user => <li key={user.id}>
                  {user.name}<br />
                  {user.email}<br />
                  {user.role}<br />
                  <Image src={"/" + user?.image} width={200} height={200} alt="Picture of the author" />
            </li>)}
      </ul>

}