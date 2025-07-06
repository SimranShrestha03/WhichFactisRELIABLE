import React, { useState, useEffect, useRef } from 'react';
import CountdownTimer from './CountdownTimer';
import { ImageQuestion } from '../data/imageQuestions';

interface ImageQuizProps {
  questions: ImageQuestion[];
  onComplete: (answers: Array<{ id: number; pickedIsReliable: boolean | null }>) => void;
  soundEnabled: boolean;
  onPlayAgain: () => void;
}

const ImageQuiz: React.FC<ImageQuizProps> = ({ questions, onComplete, soundEnabled, onPlayAgain }) => {
  const [selectedOption, setSelectedOption] = useState<'left' | 'right' | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<{ left: string; right: string; leftIsReliable: boolean }>({ left: '', right: '', leftIsReliable: false });
  const [shakeClass, setShakeClass] = useState<string>('');
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  
  // Get a random question for this round
  const currentQuestion = React.useMemo(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }, [questions]);
  
  // Add audio refs
  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const incorrectSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio elements
  useEffect(() => {
    correctSoundRef.current = document.getElementById('correct-sound') as HTMLAudioElement;
    incorrectSoundRef.current = document.getElementById('incorrect-sound') as HTMLAudioElement;
  }, []);



  // Cleanup effect to stop all sounds when component unmounts
  useEffect(() => {
    return () => {
      stopAllSounds();
    };
  }, []);

  // Stop all sounds
  const stopAllSounds = () => {
    if (correctSoundRef.current) {
      correctSoundRef.current.pause();
      correctSoundRef.current.currentTime = 0;
    }
    if (incorrectSoundRef.current) {
      incorrectSoundRef.current.pause();
      incorrectSoundRef.current.currentTime = 0;
    }
  };

  // Shuffle options when component mounts
  useEffect(() => {
    const options = [
      { image: currentQuestion.reliableImage, isReliable: true },
      { image: currentQuestion.unreliableImage, isReliable: false }
    ];
    
    // Randomly decide which option goes left/right
    const shuffled = Math.random() < 0.5;
    setShuffledOptions({
      left: shuffled ? options[0].image : options[1].image,
      right: shuffled ? options[1].image : options[0].image,
      leftIsReliable: shuffled ? options[0].isReliable : options[1].isReliable
    });
  }, [currentQuestion]);
  
  const handleOptionSelect = (isLeft: boolean) => {
    if (showFeedback) return;
    
    setSelectedOption(isLeft ? 'left' : 'right');
    
    const userSelectedReliable = isLeft ? shuffledOptions.leftIsReliable : !shuffledOptions.leftIsReliable;
    const correct = userSelectedReliable === true; // Reliable is always correct
    
    setIsCorrect(correct);
    setShakeClass(correct ? 'shake-green' : 'shake-red');
    
    // Play appropriate sound if enabled
    if (soundEnabled) {
      const sound = correct ? correctSoundRef.current : incorrectSoundRef.current;
      if (sound) {
        sound.currentTime = 0;
        sound.play().catch(error => {
          console.warn('Could not play answer sound:', error);
        });
      }
    }
    
    setShowFeedback(true);
  };
  

  
  const handlePlayAgain = () => {
    // Stop all sounds before starting new round
    stopAllSounds();
    onPlayAgain();
  };

  return (
    <div className="min-h-screen flex flex-col p-4 bg-[url('/images/virus1.jpg')] bg-cover bg-center">
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col">
        <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden mb-8">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-10 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Which Practice Is Reliable?
            </span>
          </h1>
          

          
          <div className="mb-6 relative">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Image Quiz
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-2 mb-6 h-96">
            <div 
              onClick={() => handleOptionSelect(true)}
              className={`fact-myth-card flex-1 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                selectedOption === 'left'
                  ? isCorrect 
                    ? 'bg-green-50 border-green-500 shadow-lg' 
                    : 'bg-red-50 border-red-500 shadow-lg'
                  : 'bg-white/80 hover:bg-white/90 border-gray-200'
              } border-2 shadow-md hover:shadow-xl relative overflow-hidden group ${selectedOption === 'left' ? shakeClass : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 w-full h-full">
                <img 
                  src={shuffledOptions.left} 
                  alt="Left option" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
            </div>
            
            <div 
              onClick={() => handleOptionSelect(false)}
              className={`fact-myth-card flex-1 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                selectedOption === 'right'
                  ? isCorrect 
                    ? 'bg-green-50 border-green-500 shadow-lg' 
                    : 'bg-red-50 border-red-500 shadow-lg'
                  : 'bg-white/80 hover:bg-white/90 border-gray-200'
              } border-2 shadow-md hover:shadow-xl relative overflow-hidden group ${selectedOption === 'right' ? shakeClass : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 w-full h-full">
                <img 
                  src={shuffledOptions.right} 
                  alt="Right option" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feedback below images */}
          {showFeedback && (
            <div className={`p-4 rounded-xl ${
              isCorrect 
                ? 'bg-green-50 border-2 border-green-200 text-green-800' 
                : 'bg-red-50 border-2 border-red-200 text-red-800'
            }`}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">
                  {isCorrect ? '✅ The picture you selected is correct.' : '❌ The picture you selected is incorrect.'}
                </h2>
                <button 
                  onClick={handlePlayAgain}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-base hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ImageQuiz; 