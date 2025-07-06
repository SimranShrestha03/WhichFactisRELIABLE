import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  duration: number;  // in seconds
  onComplete: () => void;
  isRunning: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  duration, 
  onComplete,
  isRunning 
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  
  useEffect(() => {
    if (!isRunning) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        // Play tick sound every second
        if (Math.floor(prevTime) !== Math.floor(prevTime - 0.1)) {
          const tickSound = document.getElementById('tick-sound') as HTMLAudioElement;
          if (tickSound) {
            tickSound.currentTime = 0;
            tickSound.play().catch(() => {});
          }
        }
        return prevTime - 0.1;
      });
    }, 100);
    
    return () => clearInterval(timer);
  }, [isRunning, onComplete]);
  
  useEffect(() => {
    if (isRunning) {
      setTimeLeft(duration);
    }
  }, [isRunning, duration]);

  // Cleanup effect to stop tick sound when component unmounts
  useEffect(() => {
    return () => {
      const tickSound = document.getElementById('tick-sound') as HTMLAudioElement;
      if (tickSound) {
        tickSound.pause();
        tickSound.currentTime = 0;
      }
    };
  }, []);
  
  const progress = Math.max(0, (timeLeft / duration) * 100);
  
  let color = 'bg-blue-500';
  if (progress < 30) {
    color = 'bg-red-500';
  } else if (progress < 60) {
    color = 'bg-yellow-500';
  }

  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className={`h-full transition-all ${color}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default CountdownTimer;