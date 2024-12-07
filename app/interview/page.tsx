"use client";
import { Button } from "@/components/ui/button";
import { Info, Timer } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Interview = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Start with 60 seconds
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          console.log("Stream successfully set on video element");
          videoRef.current
            .play()
            .catch((error) => console.error("Error playing the video:", error));
        }
      } catch (error: any) {
        console.error("Error accessing camera and microphone:", error);
      }
    };

    getMedia();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop the timer if timeLeft reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1); // Decrease timeLeft by 1 every second
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  const handleNext = () =>{
    redirect('/end')
  }
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white min-h-screen px-6 lg:px-16">
      <div className="m-auto flex w-[95%] max-w-[88rem] flex-col items-center gap-2 pb-8 md:w-[100%]">
        {/* Question Number */}
        <div className="mb-2">
          <span className="font-semibold">1/10</span>
        </div>

        {/* Question Text */}
        <div className="mb-4 text-center">
          <span className="font-semibold">
            Hi, I'm Avya, and I'll be conducting the interview today. How are
            you doing?
          </span>
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold">Timer:</span>
          <div className="flex items-center bg-red-100 text-red-400 px-3 py-1 rounded-md">
            <Timer size={24} className="h-5 w-5 text-red-400" />
            <span className="ml-2 font-bold">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full flex flex-col rounded-md overflow-hidden items-center">
          <video
            ref={videoRef}
            className="w-96 h-96 rounded-md"
            autoPlay
            muted
          />
          {/* Save and Next Button */}
          <Button 
          onClick={handleNext}
          className="bg-[#6C60F4] hover:bg-[#4F33CC] text-white py-3 px-4 rounded-lg mt-4 w-40">
            <span className="font-bold">Save and Next</span>
          </Button>
          <div className="flex items-center space-x-2">
            <Info size={16} className="h-4 w-4 text-gray-400" />
            <span className="mt-1 text-sm text-gray-400">
              Press 'Enter' for Saving and Next!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
