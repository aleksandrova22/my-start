import { signIn, signOut, auth } from "@/auth"
import { AccountInfo } from './account-info';
import classes from './account.module.css';

export async function ServerComponentAccountButton() {
  const session = await auth();
  return <AccountInfo session={session} SignInButton={SignInForm} SignOutButton={SignOutForm} />
}



export function SignInForm() {
  return <form
    action={async () => {
      "use server"
      await signIn()
    }}>  

    <button type="submit" className={classes.button}>Войти</button>
  </form>

}

export function SignOutForm() {
  return <form
    action={async () => {
      "use server"
      await signOut()
    }}
  >
    <button type="submit">Выйти</button>
  </form>

}