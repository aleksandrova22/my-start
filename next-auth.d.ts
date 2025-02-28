import { Role } from "./lib/role";

declare module "next-auth" {
    interface User {
        role?: Role | string
    }
}


