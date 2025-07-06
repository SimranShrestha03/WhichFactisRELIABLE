import React from 'react';
import { CheckCircle, XCircle, HelpCircle, ArrowLeft } from 'lucide-react';
import { ImageQuestion } from '../data/imageQuestions';

interface ImageReviewProps {
  questions: ImageQuestion[];
  answers: Array<{ id: number; pickedIsReliable: boolean | null }>;
  onBack: () => void;
}

const ImageReview: React.FC<ImageReviewProps> = ({ questions, answers, onBack }) => {
  // Match questions with answers
  const reviewItems = questions.map(question => {
    const answer = answers.find(a => a.id === question.id);
    
    // Determine if answer was correct
    let isCorrect = null;
    if (answer?.pickedIsReliable !== null) {
      // For image quiz, reliable is always correct
      isCorrect = answer?.pickedIsReliable === true;
    }
    
    return {
      ...question,
      userAnswer: answer?.pickedIsReliable,
      isCorrect
    };
  });

  return (
    <div className="covid-bg min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6">
        <div className="mb-6 flex items-center">
          <button 
            onClick={onBack}
            className="mr-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Review Your Answers</h1>
        </div>
        
        <div className="space-y-6">
          {reviewItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white p-4 md:p-6 rounded-lg shadow border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-7 h-7 bg-blue-100 text-blue-700 rounded-full font-medium text-sm">
                  {index + 1}
                </span>
                
                <div className="flex-1"></div>
                
                {item.isCorrect === true && (
                  <div className="flex items-center text-green-600">
                    <CheckCircle size={18} className="mr-1" />
                    <span className="font-medium">Correct</span>
                  </div>
                )}
                
                {item.isCorrect === false && (
                  <div className="flex items-center text-red-600">
                    <XCircle size={18} className="mr-1" />
                    <span className="font-medium">Incorrect</span>
                  </div>
                )}
                
                {item.isCorrect === null && (
                  <div className="flex items-center text-gray-500">
                    <HelpCircle size={18} className="mr-1" />
                    <span className="font-medium">No Answer</span>
                  </div>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className={`p-4 rounded-lg ${
                  item.userAnswer === true 
                    ? item.isCorrect 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                    : 'bg-gray-50 border border-gray-200'
                }`}>
                  <h3 className="font-medium mb-2 text-gray-700">Reliable Practice</h3>
                  <img 
                    src={item.reliableImage} 
                    alt="Reliable practice" 
                    className="w-full h-48 object-cover rounded-lg mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                  <p className="text-sm text-gray-600">This is the correct, reliable practice to follow.</p>
                </div>
                
                <div className={`p-4 rounded-lg ${
                  item.userAnswer === false 
                    ? item.isCorrect 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                    : 'bg-gray-50 border border-gray-200'
                }`}>
                  <h3 className="font-medium mb-2 text-gray-700">Unreliable Practice</h3>
                  <img 
                    src={item.unreliableImage} 
                    alt="Unreliable practice" 
                    className="w-full h-48 object-cover rounded-lg mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                  <p className="text-sm text-gray-600">This is an unreliable practice that should be avoided.</p>
                </div>
              </div>
              
              <div className={`p-3 rounded ${
                item.isCorrect === true 
                  ? 'bg-green-50 text-green-800' 
                  : item.isCorrect === false 
                    ? 'bg-red-50 text-red-800' 
                    : 'bg-gray-50 text-gray-700'
              }`}>
                <p className="text-sm">
                  <strong>Your choice:</strong> {item.userAnswer === true ? 'Reliable' : item.userAnswer === false ? 'Unreliable' : 'No answer'}
                </p>
                <p className="text-sm mt-1">
                  <strong>Correct answer:</strong> Reliable practice
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <button
            onClick={onBack}
            className="norse-blue-btn"
          >
            Back to Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageReview; 