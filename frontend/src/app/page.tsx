"use client";
import { useAuth } from "./_components/UserProvider";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      {user?.userId}
      Home page
    </div>
  );
};

export default Home;
