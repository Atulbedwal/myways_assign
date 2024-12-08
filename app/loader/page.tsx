"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const Loader = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard'); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white min-h-screen px-6 lg:px-16">
      <div className="flex justify-center">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js"></script>
        <lottie-player
          src="https://lottie.host/e6dce472-d28b-4f3d-9e8d-6105c068264d/FuXa0n3ZkY.json"
          background="##FFFFFF"
          speed="1"
          style={{ width: '300px', height: '300px' }}
          autoplay
          direction="1"
          mode="normal"
        />
      </div>
    </div>
  );
};

export default Loader;
