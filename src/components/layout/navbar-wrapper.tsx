import { getSession } from "@/lib/session";
import { Navbar } from "./navbar";

export async function NavbarWrapper() {
  const session = await getSession();
  const user = session.user ? { name: session.user.name, role: session.user.role } : null;
  return <Navbar user={user} />;
}
