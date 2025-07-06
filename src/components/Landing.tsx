import React from 'react';
import { BrainCircuit } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="covid-bg min-h-screen w-full flex flex-col justify-center items-center p-4">
      <div className="max-w-lg w-full bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-blue-100 rounded-full">
            <BrainCircuit className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Which Fact Is Reliable?
        </h1>
        
        <h2 className="text-xl text-center text-gray-600 mb-8">
          Test your COVID-19 knowledge
        </h2>
        
        <p className="text-gray-700 mb-8 text-center">
          Can you tell fact from fiction? This quiz challenges you to identify reliable 
          COVID-19 information from common myths and misconceptions.
        </p>
        
        <div className="flex flex-col items-center">
          <button
            onClick={onStart}
            className="norse-blue-btn text-lg w-full md:w-2/3 flex items-center justify-center gap-2"
          >
            Start Quiz
          </button>
          
          <p className="mt-6 text-sm text-gray-500 text-center">
            Includes 10 random questions. Your results will be anonymously tracked for research purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;