import React, { useEffect, useRef } from 'react';
import { Check, X, Star } from 'lucide-react';

interface ResultProps {
  score: number;
  totalQuestions: number;
  onReview: () => void;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ 
  score, 
  totalQuestions, 
  onReview, 
  onRestart
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const winSoundRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize audio element
  useEffect(() => {
    winSoundRef.current = document.getElementById('win-sound') as HTMLAudioElement;
    if (winSoundRef.current) {
      winSoundRef.current.currentTime = 0;
      winSoundRef.current.play().catch(error => {
        console.warn('Could not play win sound:', error);
      });
    }
  }, []);
  
  // Determine number of stars based on score
  const getStarCount = () => {
    if (score >= 7) return 3;
    if (score >= 4) return 2;
    if (score >= 1) return 1;
    return 0;
  };
  
  // Determine feedback based on score
  const getFeedback = () => {
    if (percentage >= 90) return 'Excellent work! You\'re very well-informed about COVID-19.';
    if (percentage >= 70) return 'Good job! You have solid knowledge about COVID-19.';
    if (percentage >= 50) return 'Not bad. You know some facts, but there\'s room for improvement.';
    return 'You might want to review COVID-19 facts from reliable sources.';
  };

  const starCount = getStarCount();

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-[url('/images/virus1.jpg')] bg-cover bg-center">
      <div className="max-w-md w-full bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
        {/* Decorative virus elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-4 left-4 w-16 h-16 opacity-10">
            <img src="/images/virus1.png" alt="" className="w-full h-full animate-spin-slow" />
          </div>
          <div className="absolute bottom-4 right-4 w-20 h-20 opacity-10">
            <img src="/images/virus2.png" alt="" className="w-full h-full animate-spin-slow" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Your Results
          </span>
        </h1>
        
        {/* Score display */}
        <div className="flex flex-col items-center mb-8">
          <div className={`text-6xl font-bold mb-4 ${
            percentage >= 70 ? 'text-green-600' : 
            percentage >= 50 ? 'text-yellow-600' : 
            'text-red-600'
          }`}>
            {score}/{totalQuestions}
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div 
              className={`h-4 rounded-full transition-all duration-1000 ${
                percentage >= 70 ? 'bg-gradient-to-r from-green-400 to-green-600' : 
                percentage >= 50 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 
                'bg-gradient-to-r from-red-400 to-red-600'
              }`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          
          {/* Star Rating */}
          <div className="flex justify-center gap-3 mb-6">
            {[...Array(3)].map((_, index) => (
              <Star
                key={index}
                size={40}
                className={`${
                  index < starCount 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300'
                } transition-all duration-500 transform hover:scale-110`}
              />
            ))}
          </div>
          
          <p className="text-gray-700 text-center text-lg">
            {getFeedback()}
          </p>
        </div>
        
        {/* Stats */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-8 shadow-md">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600 font-medium">Correct answers:</span>
            <span className="flex items-center text-green-600 font-semibold">
              <Check size={20} className="mr-2" /> {score}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Incorrect answers:</span>
            <span className="flex items-center text-red-600 font-semibold">
              <X size={20} className="mr-2" /> {totalQuestions - score}
            </span>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={onReview}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Review Answers
          </button>
          
          <button 
            onClick={onRestart}
            className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-blue-200"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;