import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

const Home = async () => {
  const { user } = await getServerSession(authOptions);

  if (user["is_employee"]) {
    return <main>Employee Home</main>;
  }
  return <main>Client Home</main>;
};

export default Home;
