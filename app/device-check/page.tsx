"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Airplay, Check, Clock, Landmark, Mic, Video, Volume2 } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

const Device = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraChecked, setCameraChecked] = useState(false);
  const [micChecked, setMicChecked] = useState(false);
  const [speakerChecked, setSpeakerChecked] = useState(false);
  const [screenChecked, setScreenChecked] = useState(false);

  const [cameraLoading, setCameraLoading] = useState(false);
  const [micLoading, setMicLoading] = useState(false);
  const [speakerLoading, setSpeakerLoading] = useState(false);
  const [screenLoading, setScreenLoading] = useState(false);

  const [currentStep, setCurrentStep] = useState(0);

  const checkCamera = async () => {
    setCameraLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setCameraChecked(true);
        setCurrentStep(1);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    } finally {
      setCameraLoading(false);
    }
  };

  const checkMic = async () => {
    setMicLoading(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicChecked(true);
      setCurrentStep(2);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    } finally {
      setMicLoading(false);
    }
  };

  const checkSpeaker = async () => {
    setSpeakerLoading(true);
    try {
      const audio = new Audio();
      audio.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA="; // Base64 of a silent audio
      await audio.play();
      audio.onended = () => {
        setSpeakerChecked(true);
        setCurrentStep(3);
      };
    } catch (error) {
      console.error("Error checking speaker:", error);
    } finally {
      setSpeakerLoading(false);
    }
  };

  const shareScreen = async () => {
    setScreenLoading(true);
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      if (stream) {
        setScreenChecked(true);
      }
    } catch (error) {
      console.error("Error sharing screen:", error);
    } finally {
      setScreenLoading(false);
    }
  };

  useEffect(() => {
    if (currentStep === 0) {
      checkCamera();
    } else if (currentStep === 1) {
      checkMic();
    } else if (currentStep === 2) {
      checkSpeaker();
    } else if (currentStep === 3) {
      shareScreen();
    }
  }, [currentStep]);
  
  const handleNext = () => {
    redirect("/start")
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white min-h-screen px-6 lg:px-16">
      <div className="m-auto mt-12 flex w-[95%] max-w-[88rem] flex-col items-center justify-center gap-8 md:m-auto md:w-[80%] md:gap-12">
        <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <span className="dmSans text-[1.25rem] md:text-[1.5rem] font-bold text-white">
            Demo Interview
          </span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-1 border rounded-lg border-neutral-500">
              <Landmark className="h-5 w-5 text-red-400" />
              <span className="text-neutral-200">MyWays.ai</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1 border rounded-lg border-neutral-500">
              <Clock className="h-5 w-5 text-red-400" />
              <span className="text-neutral-200">10 Minutes</span>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="relative flex flex-col items-center h-[428px] w-[600px]">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              height="428"
              width="600"
              className="rounded-xl shadow-md"
              style={{ transform: "scaleX(-1)" }}
            ></video>
          </div>
          <div className="flex flex-col gap-6 md:w-[40%]">
            <button
              className={`flex items-center justify-between w-full p-4 rounded-xl border ${
                cameraChecked ? "" : "border-slate-500"
              }`}
            >
              <div className="flex items-center gap-4">
                <Video className="h-5 w-5 text-white" />
                <span>Check Camera</span>
              </div>
              {cameraLoading ? (
                <Image className="h-5 w-5 text-yellow-400"
                src="loader.svg"
                      width={24}
                      height={24}
                      alt="Loader" />
              ) : (
                cameraChecked && <Check className="h-5 w-5 text-white" />
              )}
            </button>
            <button
              className={`flex items-center justify-between w-full p-4 rounded-xl border ${
                micChecked ? "" : "border-slate-500"
              }`}
            >
              <div className="flex items-center gap-4">
                <Mic className="h-5 w-5 text-white" />
                <span>Check Microphone</span>
              </div>
              {micLoading ? (
                <Image className="h-5 w-5 text-yellow-400"
                src="loader.svg"
                      width={24}
                      height={24}
                      alt="Loader" />
              ) : (
                micChecked && <Check className="h-5 w-5 text-white" />
              )}
            </button>
            <button
              className={`flex items-center justify-between w-full p-4 rounded-xl border ${
                speakerChecked ? "" : "border-slate-500"
              }`}
            >
              <div className="flex items-center gap-4">
                <Volume2 className="h-5 w-5 text-white" />
                <span>Check Speaker</span>
              </div>
              {speakerLoading ? (
                <Image className="h-5 w-5 text-yellow-400"
                src="loader.svg"
                      width={24}
                      height={24}
                      alt="Loader" />
              ) : (
                speakerChecked && <Check className="h-5 w-5 border-white text-white" />
              )}
            </button>
            <button
              className={`flex items-center justify-between w-full p-4 rounded-xl border ${
                screenChecked ? "" : "border-slate-500"
              }`}
            >
              <div className="flex items-center gap-4">
                <Airplay className="h-5 w-5 text-white" />
                <span>Enable Screen Share</span>
              </div>
              {screenLoading ? (
                <Image className="h-5 w-5 text-yellow-400"
                src="loader.svg"
                      width={24}
                      height={24}
                      alt="Loader" />
              ) : (
                screenChecked && <Check className="h-5 w-5 text-white" />
              )}
            </button>
            {screenChecked && (
              <Button
              onClick={handleNext}
              className="bg-[#6C60F4] hover:bg-[#4F33CC] text-white py-3 px-4 rounded-lg mt-6 w-full">
                Start Interview
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;
