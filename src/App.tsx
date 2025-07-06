import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';
import ImageQuiz from './components/ImageQuiz';
import Result from './components/Result';
import Review from './components/Review';
import ImageReview from './components/ImageReview';
import { questions, Question } from './data/questions';
import { imageQuestions, ImageQuestion } from './data/imageQuestions';

interface Answer {
  id: number;
  pickedIsFact: boolean | null;
}

interface ImageAnswer {
  id: number;
  pickedIsReliable: boolean | null;
}

type QuizType = 'facts' | 'images';

function App() {
  const [step, setStep] = useState<'home' | 'quiz' | 'result' | 'review'>('home');
  const [quizType, setQuizType] = useState<QuizType | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [imageAnswers, setImageAnswers] = useState<ImageAnswer[]>([]);

  // Get 10 random questions for facts quiz
  const quizQuestions = React.useMemo(() => {
    const allQuestions = [...questions];
    
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    
    return allQuestions.slice(0, 10);
  }, []);

  // Get 10 random questions for image quiz
  const imageQuizQuestions = React.useMemo(() => {
    const allImageQuestions = [...imageQuestions];
    
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = allImageQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allImageQuestions[i], allImageQuestions[j]] = [allImageQuestions[j], allImageQuestions[i]];
    }
    
    return allImageQuestions.slice(0, 10);
  }, []);

  const handleSelectFacts = () => {
    setQuizType('facts');
    setStep('quiz');
  };

  const handleSelectImages = () => {
    setQuizType('images');
    setStep('quiz');
  };

  const handleQuizComplete = (quizAnswers: Answer[]) => {
    setAnswers(quizAnswers);
    setStep('result');
  };

  const handleImageQuizComplete = (quizAnswers: ImageAnswer[]) => {
    setImageAnswers(quizAnswers);
    setStep('result');
  };

  const handleImageQuizPlayAgain = () => {
    // Reset image quiz state and start a new round
    setImageAnswers([]);
    // The ImageQuiz component will automatically get a new random question
  };

  const handleReview = () => {
    setStep('review');
  };

  const handleRestart = () => {
    // Stop all audio before restarting
    const stopAllAudio = () => {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
    stopAllAudio();
    setStep('home');
    setQuizType(null);
    setAnswers([]);
    setImageAnswers([]);
  };

  const handleBackToResults = () => {
    // Stop all audio before navigating back to results
    const stopAllAudio = () => {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
    stopAllAudio();
    setStep('result');
  };

  const calculateScore = (answers: Answer[]): number => {
    return answers.filter(a => a.pickedIsFact === (a.id <= 25)).length;
  };

  const calculateImageScore = (answers: ImageAnswer[]): number => {
    return answers.filter(a => a.pickedIsReliable === true).length;
  };

  // Cleanup effect to stop all audio when step changes
  useEffect(() => {
    return () => {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, [step]);

  return (
    <div className="min-h-screen bg-gray-50">
      {step === 'home' && (
        <HomePage 
          onSelectFacts={handleSelectFacts}
          onSelectImages={handleSelectImages}
        />
      )}
      
      {step === 'quiz' && quizType === 'facts' && (
        <Quiz 
          key="facts-quiz"
          questions={quizQuestions} 
          onComplete={handleQuizComplete}
          soundEnabled={true}
        />
      )}

      {step === 'quiz' && quizType === 'images' && (
        <ImageQuiz 
          key={`images-quiz-${Date.now()}`}
          questions={imageQuizQuestions} 
          onComplete={handleImageQuizComplete}
          soundEnabled={true}
          onPlayAgain={handleImageQuizPlayAgain}
        />
      )}
      
      {step === 'result' && (
        <Result 
          score={quizType === 'facts' ? calculateScore(answers) : calculateImageScore(imageAnswers)}
          totalQuestions={10}
          onReview={handleReview}
          onRestart={handleRestart}
        />
      )}

      {step === 'review' && quizType === 'facts' && (
        <Review 
          questions={quizQuestions}
          answers={answers}
          onBack={handleBackToResults}
        />
      )}

      {step === 'review' && quizType === 'images' && (
        <ImageReview 
          questions={imageQuizQuestions}
          answers={imageAnswers}
          onBack={handleBackToResults}
        />
      )}
    </div>
  );
}

export default App;