/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { Session } from 'next-auth';
import { FunctionComponent } from 'react';
import classes from './account.module.css';


export function AccountInfo({ session, SignInButton, SignOutButton }: { session: Session | null, SignInButton: FunctionComponent, SignOutButton: FunctionComponent }) {
  if (session?.user)
    return <div className={classes.input}>
      Signed in as {session.user?.name} ({session.user?.email})
      <br />
      {session.user?.image
        && <img src={session.user?.image}  className={classes.avatar}/>}
      <br />
      <SignOutButton />
    </div>;
  return <div>
    Not signed in <SignInButton />
  </div>

}