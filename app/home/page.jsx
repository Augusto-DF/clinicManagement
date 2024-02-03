import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import DashboardMenu from "@/components/DashboardMenu";

const Home = async () => {
  const { user } = await getServerSession(authOptions);

  if (user["is_employee"]) {
    return <main>Employee Home</main>;
  }
  return (
    <main>
      <DashboardMenu />
    </main>
  );
};

export default Home;
