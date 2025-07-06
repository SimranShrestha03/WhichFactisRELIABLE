import React, { useState, useEffect, useRef } from 'react';
import CountdownTimer from './CountdownTimer';

interface QuizProps {
  questions: Array<{
    id: number;
    myth: string;
    fact: string;
    explanation: string;
    source: string;
  }>;
  onComplete: (answers: Array<{ id: number; pickedIsFact: boolean | null }>) => void;
  soundEnabled: boolean;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete, soundEnabled }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Array<{ id: number; pickedIsFact: boolean | null }>>(
    questions.slice(0, 10).map(q => ({ id: q.id, pickedIsFact: null }))
  );
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<'left' | 'right' | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [timerRunning, setTimerRunning] = useState<boolean>(true);
  const [shuffledOptions, setShuffledOptions] = useState<{ left: string; right: string; leftIsFact: boolean }>({ left: '', right: '', leftIsFact: false });
  const [shakeClass, setShakeClass] = useState<string>('');
  
  const currentQuestion = questions[currentIndex];
  
  // Add audio refs
  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const incorrectSoundRef = useRef<HTMLAudioElement | null>(null);
  const timerSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio elements
  useEffect(() => {
    correctSoundRef.current = document.getElementById('correct-sound') as HTMLAudioElement;
    incorrectSoundRef.current = document.getElementById('incorrect-sound') as HTMLAudioElement;
    timerSoundRef.current = document.getElementById('timer-sound') as HTMLAudioElement;
  }, []);

  // Handle timer sound
  useEffect(() => {
    if (!soundEnabled) return;
    
    if (timerRunning && timerSoundRef.current) {
      timerSoundRef.current.currentTime = 0;
      timerSoundRef.current.play().catch(error => {
        console.warn('Could not play timer sound:', error);
      });
    } else if (timerSoundRef.current) {
      timerSoundRef.current.pause();
      timerSoundRef.current.currentTime = 0;
    }
  }, [timerRunning, soundEnabled]);

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
    if (timerSoundRef.current) {
      timerSoundRef.current.pause();
      timerSoundRef.current.currentTime = 0;
    }
  };

  // Shuffle options when question changes
  useEffect(() => {
    const isFactCorrect = currentQuestion.id <= 25;
    const options = [
      { text: currentQuestion.fact, isFact: true },
      { text: currentQuestion.myth, isFact: false }
    ];
    
    // Randomly decide which option goes left/right
    const shuffled = Math.random() < 0.5;
    setShuffledOptions({
      left: shuffled ? options[0].text : options[1].text,
      right: shuffled ? options[1].text : options[0].text,
      leftIsFact: shuffled ? options[0].isFact : options[1].isFact
    });
  }, [currentQuestion]);
  
  const handleOptionSelect = (isLeft: boolean) => {
    if (showExplanation) return;
    
    setTimerRunning(false);
    setSelectedOption(isLeft ? 'left' : 'right');
    
    const isFactCorrect = currentQuestion.id <= 25;
    const userSelectedFact = isLeft ? shuffledOptions.leftIsFact : !shuffledOptions.leftIsFact;
    const correct = userSelectedFact === isFactCorrect;
    
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
    
    const newAnswers = [...answers];
    newAnswers[currentIndex] = {
      id: currentQuestion.id,
      pickedIsFact: userSelectedFact
    };
    setAnswers(newAnswers);
    
    setShowExplanation(true);
  };
  
  const handleTimerComplete = () => {
    if (showExplanation) return;
    
    const newAnswers = [...answers];
    newAnswers[currentIndex] = {
      id: currentQuestion.id,
      pickedIsFact: null
    };
    setAnswers(newAnswers);
    
    setShowExplanation(true);
    setSelectedOption(null);
    setIsCorrect(null);
    setTimerRunning(false);
  };
  
  const handleNext = () => {
    if (!showExplanation) return;
    
    // Stop all sounds before moving to next question
    stopAllSounds();
    
    if (currentIndex < 9) {
      setCurrentIndex(currentIndex + 1);
      setShowExplanation(false);
      setSelectedOption(null);
      setIsCorrect(null);
      setTimerRunning(true);
      setShakeClass('');
    } else {
      onComplete(answers);
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-4 bg-[url('/images/virus1.jpg')] bg-cover bg-center">
      <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col">
        <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden mb-8">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-10 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Which Fact Is Reliable?
            </span>
          </h1>
          
          <div className="mb-10 relative">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-semibold text-gray-700">
                Question {currentIndex + 1} of 10
              </h2>
              <div className="w-32 bg-gray-200 rounded-full h-1.5">
                <div 
                  className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                  style={{ width: `${((currentIndex + 1) / 10) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <CountdownTimer 
              duration={10} 
              onComplete={handleTimerComplete}
              isRunning={timerRunning} 
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-10 mb-10">
            <div 
              onClick={() => handleOptionSelect(true)}
              className={`fact-myth-card flex-1 p-10 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                selectedOption === 'left'
                  ? isCorrect 
                    ? 'bg-green-50 border-green-500 shadow-lg' 
                    : 'bg-red-50 border-red-500 shadow-lg'
                  : 'bg-white/80 hover:bg-white/90 border-gray-200'
              } border-2 shadow-md hover:shadow-xl relative overflow-hidden group ${selectedOption === 'left' ? shakeClass : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="text-xl text-gray-800 leading-relaxed relative z-10">
                {shuffledOptions.left}
              </p>
            </div>
            
            <div 
              onClick={() => handleOptionSelect(false)}
              className={`fact-myth-card flex-1 p-10 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                selectedOption === 'right'
                  ? isCorrect 
                    ? 'bg-green-50 border-green-500 shadow-lg' 
                    : 'bg-red-50 border-red-500 shadow-lg'
                  : 'bg-white/80 hover:bg-white/90 border-gray-200'
              } border-2 shadow-md hover:shadow-xl relative overflow-hidden group ${selectedOption === 'right' ? shakeClass : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="text-xl text-gray-800 leading-relaxed relative z-10">
                {shuffledOptions.right}
              </p>
            </div>
          </div>
          
          {showExplanation && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={handleNext} 
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {currentIndex < 9 ? 'Next Question' : 'See Results'}
              </button>
            </div>
          )}
        </div>

        {showExplanation && (
          <div className={`p-10 rounded-2xl transition-all duration-300 ${
            isCorrect === null 
              ? 'bg-gray-100/85 text-gray-700' 
              : isCorrect 
                ? 'bg-green-50/85 text-green-800 border border-green-200' 
                : 'bg-red-50/85 text-red-800 border border-red-200'
          } relative overflow-hidden backdrop-blur-sm shadow-2xl`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                {isCorrect === null 
                  ? '⏰ Time expired!' 
                  : isCorrect 
                    ? '✅ Correct!' 
                    : '❌ Incorrect!'}
              </h3>
              {isCorrect === null ? (
                <p className="text-xl leading-relaxed">Time's up! You didn't select an answer.</p>
              ) : isCorrect ? (
                <p className="text-xl leading-relaxed">Great job! You correctly identified the fact.</p>
              ) : (
                <p className="text-xl leading-relaxed">
                  {shuffledOptions.leftIsFact 
                    ? 'The statement on the left is the fact.' 
                    : 'The statement on the right is the fact.'}
                </p>
              )}
              
              <div className="mt-6 p-4 bg-white/70 rounded-lg">
                <p className="text-lg leading-relaxed mb-3">
                  <strong>Explanation:</strong> {currentQuestion.explanation}
                </p>
                <a 
                  href={currentQuestion.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  <span>📚 Read more from source</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;