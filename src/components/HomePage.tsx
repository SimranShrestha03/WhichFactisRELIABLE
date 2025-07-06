import React from 'react';
import { BrainCircuit, Image, BookOpen, Camera } from 'lucide-react';

interface HomePageProps {
  onSelectFacts: () => void;
  onSelectImages: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectFacts, onSelectImages }) => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-[url('/images/virus1.jpg')] bg-cover bg-center">
      <div className="max-w-4xl w-full bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
        {/* Decorative virus elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-4 left-4 w-16 h-16 opacity-10">
            <img src="/images/virus1.jpg" alt="" className="w-full h-full animate-spin-slow" />
          </div>
          <div className="absolute bottom-4 right-4 w-20 h-20 opacity-10">
            <img src="/images/virus2.jpg" alt="" className="w-full h-full animate-spin-slow" />
          </div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full">
                <BrainCircuit className="w-20 h-20 text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Which Fact Is Reliable?
              </span>
            </h1>
            
            <h2 className="text-2xl text-gray-600 mb-6">
              Test your COVID-19 knowledge
            </h2>
            
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Choose your preferred format and challenge yourself to identify reliable 
              COVID-19 information from common myths and misconceptions.
            </p>
          </div>

          {/* Quiz Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Facts Version */}
            <div 
              onClick={onSelectFacts}
              className="group cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <BookOpen className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">
                Facts & Myths
              </h3>
              
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Read through statements and determine which ones are reliable facts 
                and which are common misconceptions about COVID-19.
              </p>
              
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  <span>Start Facts Quiz</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Images Version */}
            <div 
              onClick={onSelectImages}
              className="group cursor-pointer bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                  <Camera className="w-16 h-16 text-green-600" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">
                Visual Quiz
              </h3>
              
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Look at images and identify which practices are reliable for 
                preventing COVID-19 spread and which are not recommended.
              </p>
              
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-300">
                  <span>Start Visual Quiz</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
              What to Expect
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-lg">10</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Questions</h4>
                <p className="text-gray-600 text-sm">Randomly selected from our database</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold text-lg">10s</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Timer</h4>
                <p className="text-gray-600 text-sm">Per question to keep you engaged</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold text-lg">∞</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Replay</h4>
                <p className="text-gray-600 text-sm">Play as many times as you want</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Your results will be anonymously tracked for research purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 