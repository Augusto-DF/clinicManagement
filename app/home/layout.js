import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) redirect("/login");
  return <main>{children}</main>;
};

export default Layout;
