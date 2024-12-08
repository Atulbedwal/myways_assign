"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {useLottie, useLottieInteractivity} from "lottie-react";
import LottieFiles from '@/public/lottie/Animation - 1733656439178.json';

const style = {
    width: 200,
    height: 200,
    background: 'transparent',
}

const options = {
    animationData: LottieFiles,
    loop: true,
    autoplay: true,
}

const Lottie = () => {
    const lottieObj = useLottie(options,style);
    const Animation = useLottieInteractivity({
        lottieObj,
        actions: [
            {
                visibility: [0, 1],
                type: "seek",
                frames: [0, 100],
            },
        ],
        mode: "scroll",
    });
    return <div>{Animation}</div>;;
}

const Loader = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/instruction'); 
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);
  

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white min-h-screen px-6 lg:px-16">
      <div className="flex justify-center">
        <Lottie />
      </div>
    </div>
  );
};

export default Loader;
