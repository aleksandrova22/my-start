import type { User } from '@prisma/client';



export function GetUsers({ users }: { users: User[] }) {
      return <ul >
            {users?.map(user => <li key={user.id}>
                  {user.name}<br />
                  {user.email}<br />
                    {/* <img src={user.image} width={50} height={50} />  */}
            </li>)}
      </ul>

}