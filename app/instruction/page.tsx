"use client"

import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import { Clock, ExternalLink, Landmark } from "lucide-react";

const Instruction = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const requestPermissions = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          console.log("Stream successfully set on video element");
          videoRef.current.play().catch((error) => {
            console.error("Error playing the video:", error);
          });
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error accessing camera and microphone:", error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    };

    requestPermissions();
  }, []);

  const handleNext = () => {
    router.push("/device-check");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white min-h-screen px-6 lg:px-16">
      <div className="m-auto mt-12 flex w-[95%] max-w-[88rem] flex-col items-center justify-center gap-8 md:m-auto md:w-[80%] md:gap-12">
        {/* Header Section */}
        <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="text-lg font-bold flex justify-between">
            Trainee Interview
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-2 md:w-fit md:flex-row">
            <div className="flex w-fit items-center gap-2 rounded-lg border border-neutral-500 px-2 py-1 md:px-4">
              <Landmark className="h-5 w-5 text-red-400" />
              <span className="text-[0.78rem] leading-loose md:text-[0.88rem] font-[300] not-italic no-underline text-left text-neutral-200">
                Zeko
              </span>
            </div>
            <div className="flex w-fit items-center gap-2 rounded-lg border border-neutral-500 px-2 py-1 md:px-4">
              <Clock className="h-5 w-5 text-red-400" />
              <span className="  text-[0.78rem] leading-loose md:text-[0.88rem] font-[300] not-italic no-underline text-left text-neutral-200">
                26 Minutes
              </span>
            </div>
          </div>
        </div>

        <div className="m-auto flex w-full items-start justify-between">
          {/* Video Section */}
          <div className="relative flex-col items-center h-[428] w-[600] flex">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              height="428"
              width="600"
              className="rounded-xl shadow-md"
              style={{ transform: "scaleX(-1)" }}
            ></video>
          </div>

          {/* Instruction Section */}
          <div className="flex h-full w-full flex-col items-start justify-between md:min-h-[27rem] md:max-w-[40%]">
            <div className="flex w-[100%] flex-col items-start gap-2 md:w-full">
              <span className="  text-[1rem] md:text-[1.25rem] font-[700] not-italic no-underline text-left  text-white">
                Instructions
              </span>
              <div className="flex flex-col w-full gap-2 md:w-fit">
                {/* Point 1 */}
                <div className="flex gap-2">
                  <span className=" text-[0.88rem] leading-relaxed md:text-[1rem] font-light ">
                    1.
                  </span>
                  <span className=" text-[0.88rem] leading-relaxed md:text-[1rem] font-light">
                    Ensure stable internet and choose a clean, quiet location.
                  </span>
                </div>

                {/* Point 2 */}
                <div className="flex gap-2">
                  <span className=" text-[0.88rem] leading-relaxed md:text-[1rem] font-light ">
                    2.
                  </span>
                  <span className=" text-[0.88rem] leading-relaxed md:text-[1rem] font-light ">
                    Permission for access of camera, microphone, and entire
                    screen sharing is required.
                  </span>
                </div>

                {/* Point 3 */}
                <div className="flex gap-2">
                  <span className=" text-[0.88rem] leading-relaxed md:text-[1rem] font-light ">
                    3.
                  </span>
                  <span className=" text-[0.88rem] leading-relaxed md:text-[1rem] font-light ">
                    Dress in professional attire and avoid distractions.
                  </span>
                </div>

                {/* Point 4 */}
                <div className="flex gap-2">
                  <span className=" text-[0.88rem] leading-relaxed md:text-[1rem] font-light ">
                    4.
                  </span>
                  <span className=" text-[0.88rem] leading-relaxed md:text-[1rem] font-light ">
                    Ensure all required software is installed before the
                    meeting.
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-[48px] mt-4 rounded-xl bg-slate-800 p-2 md:p-4">
              <span className="text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left">
                <span className="text-[#6C60F4] hover:text-[#4F33CC] text-[0.88rem] leading-relaxed md:text-[1rem] font-[300] not-italic no-underline text-left text-primary-300 hover:text-primary-500 group cursor-pointer inline-flex items-center">
                  Click here
                  <ExternalLink className="h-4 w-4 text-primary-300 group-hover:text-primary-500 ml-1" />
                </span>
                 to try a mock interview with Avya, our AI interviewer, and build
                your confidence before the main interview!
              </span>
            </div>
            <Button
              onClick={handleNext}
              className="bg-[#6C60F4] hover:bg-[#4F33CC] text-white py-3 px-4 rounded-lg mt-6 w-full"
            >
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
