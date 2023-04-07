import { SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiLogInCircle } from "react-icons/bi";

const index = () => {
  const router = useRouter();

  const { isLoaded, user } = useUser();

  useEffect(() => {
    if (isLoaded) {
      if (user?.organizationMemberships[0].role === "admin") {
        console.log("SUCCESS!!!");
        router.push("/menus");
      }
    }
  }, [user]);

  return (
    <main className="flex justify-center flex-col text-slate-500 font-bold">
      <h1 className="text-4xl p-10">Authorisation Required</h1>

      <div className="flex flex-row gap-1 justify-center">
        {!isLoaded && <p>Loading...</p>}
        <SignedOut>
          <SignInButton />
          <BiLogInCircle size={24} />
        </SignedOut>
      </div>
    </main>
  );
};

export default index;
