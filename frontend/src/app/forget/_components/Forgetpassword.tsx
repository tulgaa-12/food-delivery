import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const Forgotpassword = () => {
  return (
    <div className="flex flex-row items-center justify-center   gap-20">
      <div className=" basis-[40%] max-w-[416px] flex flex-col gap-10 2xl:ml-[300px] pr-[50px]">
        <div className="flex flex-col ">
          <h3 className="text-[24px] font-semibold">Reset your password </h3>
          <p className="text-[#71717A] text-[16px] font-normal">
            Enter your email to receive a password reset link.
          </p>
        </div>
        <form>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <Input
                placeholder="Enter your email address"
                className="h-[36px]"
              />
            </div>
            <Button className="bg-[gray]" type="submit">
              Send link
            </Button>
          </div>
        </form>

        <div className="flex flex-row justify-center gap-2">
          <p className="text-[16px] text-[#71717A] font-normal">
            Don’t have an account?
          </p>
          <Link href={"/login"}>
            <p className="text-[16px] text-[#2563EB]">Log in</p>
          </Link>
        </div>
      </div>
      <div className=" basis-[60%] mt-[140px] mb-[120px]  h-full">
        <img src="/5.jpg" className="rounded-lg object-cover h-full w-full" />
      </div>
    </div>
  );
};
