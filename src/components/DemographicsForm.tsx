import React, { useState } from 'react';

interface DemographicsFormProps {
  onSubmit: (data: { age: number; gender: string; soundEnabled: boolean }) => void;
}

const DemographicsForm: React.FC<DemographicsFormProps> = ({ onSubmit }) => {
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!age || isNaN(Number(age)) || Number(age) <= 0 || Number(age) > 120) {
      setError('Please enter a valid age between 1 and 120');
      return;
    }
    
    if (!gender) {
      setError('Please select a gender');
      return;
    }
    
    // Submit valid data
    onSubmit({
      age: Number(age),
      gender,
      soundEnabled
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-[url('/images/virus1.jpg')] bg-cover bg-center">
      <div className="max-w-md w-full bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Before We Begin
        </h1>
        
        <p className="text-gray-700 mb-6 text-center">
          Please provide a few details about yourself. This information will be used
          anonymously for research purposes only.
        </p>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              id="age"
              type="number"
              min="1"
              max="120"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your age"
            />
          </div>
          
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </span>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={() => setGender('Male')}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2">Male</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={() => setGender('Female')}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>

          <div>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={(e) => setSoundEnabled(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Enable sound effects
              </span>
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Continue to Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemographicsForm;