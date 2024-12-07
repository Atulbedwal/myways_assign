"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home= () => {
  const router = useRouter();
  const nextHandler = () => {
    router.push("/interview");
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white min-h-screen px-6 lg:px-16">
      <div className="m-auto flex w-[95%] max-w-[88rem] flex-col items-center gap-4 pb-[4rem] md:w-[100%] md:gap-[2rem]">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-2xl font-bold mb-2">
            Interview Instructions  <span className="text-red-500 font-semibold">!!</span>
          </span>
          <span className="text-gray-400 mb-6">
            You're in a proctored test environment. If caught in any suspicious
            behavior, you will be marked{" "}
            <span className="text-red-500 font-semibold">FAIL</span>.
          </span>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            {/* Instruction 1 */}
            <div className="flex h-[10rem] w-[15.5rem] flex-col items-center justify-center gap-[0.8rem]">
              <Image
                src="/image1.png"
                alt="Instruction 1"
                width={100}
                height={100}
              />
              <p className="text-center">
                1. Do not look <span className="font-bold">off screen</span>{" "}
                & maintain eye contact with the camera.
              </p>
            </div>
            {/* Instruction 2 */}
            <div className="flex h-[10rem] w-[15.5rem] flex-col items-center justify-center gap-[0.8rem]">
              <Image
                src="/image2.png"
                alt="Instruction 1"
                width={100}
                height={100}
              />{" "}
              <p className="text-center">
                2. Avoid{" "}
                <span className="font-bold">unusual extended pauses</span>{" "}
                & respond to questions promptly.
              </p>
            </div>
            {/* Instruction 3 */}
            <div className="flex h-[10rem] w-[15.5rem] flex-col items-center justify-center gap-[0.8rem]">
              <Image
                src="/image3.png"
                alt="Instruction 1"
                width={100}
                height={100}
              />{" "}
              <p className="text-center">
                3. Ensure you are the{" "}
                <span className="font-bold">only person</span> visible in
                the camera frame during the interview.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            {/* Instruction 4 */}
            <div className="flex flex-col items-center">
              <Image
                src="/image4.png"
                alt="Instruction 1"
                width={100}
                height={100}
              />{" "}
              <p className="text-center">
                4. Don’t switch between tabs in your web browser.
              </p>
            </div>
            {/* Instruction 5 */}
            <div className="flex h-[10rem] w-[15.5rem] flex-col items-center justify-center gap-[0.8rem]">
              <Image
                src="/image1.png"
                alt="Instruction 1"
                width={100}
                height={100}
              />{" "}
              <p className="text-center">
                5. <span className="font-bold">Minimizing the screen</span> will lead to you being kicked out.
              </p>
            </div>
          </div>
        </div>
        <span className="mt-2 text-green-500">
          Stay focused and do your best!
        </span>
        <div className="hidden items-center justify-center md:flex">
        <Button onClick={nextHandler} 
        className="bg-[#6C60F4] hover:bg-[#4F33CC] text-white py-3 px-4 rounded-lg mt-6 w-full">
                <span className="font-semibold">I Understand, start the Interview</span>
              </Button>
        </div>
      </div>
    </div>
  );
}
export default Home
