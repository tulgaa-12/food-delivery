"use client";
import { useAuth } from "./_components/UserProvider";
import { Homepage } from "./homepage/Homepage";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <Homepage />
    </div>
  );
};

export default Home;
