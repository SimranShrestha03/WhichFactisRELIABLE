import React from 'react';
import { CheckCircle, XCircle, HelpCircle, ArrowLeft } from 'lucide-react';

interface ReviewProps {
  questions: Array<{
    id: number;
    myth: string;
    fact: string;
    explanation: string;
    source: string;
  }>;
  answers: Array<{ id: number; pickedIsFact: boolean | null }>;
  onBack: () => void;
}

const Review: React.FC<ReviewProps> = ({ questions, answers, onBack }) => {
  // Match questions with answers
  const reviewItems = questions.map(question => {
    const answer = answers.find(a => a.id === question.id);
    
    // Determine if answer was correct
    let isCorrect = null;
    if (answer?.pickedIsFact !== null) {
      // For questions 1-25, fact is correct
      // For questions 26-50, myth is correct
      const isFactCorrect = question.id <= 25;
      isCorrect = answer?.pickedIsFact === isFactCorrect;
    }
    
    return {
      ...question,
      userAnswer: answer?.pickedIsFact,
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
                  item.userAnswer === false 
                    ? item.isCorrect 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                    : 'bg-gray-50 border border-gray-200'
                }`}>
                  <h3 className="font-medium mb-1 text-gray-700">Myth</h3>
                  <p>{item.myth}</p>
                </div>
                
                <div className={`p-4 rounded-lg ${
                  item.userAnswer === true
                    ? item.isCorrect 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                    : 'bg-gray-50 border border-gray-200'
                }`}>
                  <h3 className="font-medium mb-1 text-gray-700">Fact</h3>
                  <p>{item.fact}</p>
                </div>
              </div>
              
              <div className={`p-3 rounded ${
                item.isCorrect === true 
                  ? 'bg-green-50 text-green-800' 
                  : item.isCorrect === false 
                    ? 'bg-red-50 text-red-800' 
                    : 'bg-gray-50 text-gray-700'
              }`}>
                <p className="text-sm mb-2">
                  <strong>Your choice:</strong> {item.userAnswer === true ? 'Fact' : item.userAnswer === false ? 'Myth' : 'No answer'}
                </p>
                <p className="text-sm mb-2">
                  <strong>Correct answer:</strong> {item.id <= 25 ? 'Fact' : 'Myth'}
                </p>
                <p className="text-sm mb-2"><strong>Explanation:</strong> {item.explanation}</p>
                <a 
                  href={item.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                >
                  <span>📚 Read more from source</span>
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
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

export default Review;