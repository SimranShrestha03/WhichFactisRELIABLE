/**
 * Retrieves the array of used question IDs from localStorage
 */
export const getUsedIds = (): number[] => {
  try {
    const storedIds = localStorage.getItem('usedIds');
    return storedIds ? JSON.parse(storedIds) : [];
  } catch (error) {
    console.error('Error retrieving used IDs from localStorage:', error);
    return [];
  }
};

/**
 * Saves the array of used question IDs to localStorage
 */
export const setUsedIds = (ids: number[]): void => {
  try {
    localStorage.setItem('usedIds', JSON.stringify(ids));
  } catch (error) {
    console.error('Error saving used IDs to localStorage:', error);
  }
};

/**
 * Selects 10 random questions from the provided array,
 * ensuring no repetition across sessions
 */
export const pickQuestions = (allQuestions: any[], count = 10): any[] => {
  // Get previously used IDs
  let usedIds = getUsedIds();
  
  // Filter out previously used questions
  let availableQuestions = allQuestions.filter(q => !usedIds.includes(q.id));
  
  // If fewer than 'count' questions remain, reset and start fresh
  if (availableQuestions.length < count) {
    usedIds = [];
    availableQuestions = [...allQuestions];
  }
  
  // Shuffle the available questions
  const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
  
  // Take the first 'count' questions
  const selected = shuffled.slice(0, count);
  
  // Update used IDs
  const newUsedIds = [...usedIds, ...selected.map(q => q.id)];
  setUsedIds(newUsedIds);
  
  return selected;
};

/**
 * Submits quiz results to Google Sheets via Google Apps Script
 */
export const submitResults = async (data: {
  age: number;
  gender: string;
  score: number;
  answers: Array<{ id: number; pickedIsFact: boolean }>;
}) => {
  try {
    // This URL would need to be replaced with your actual Google Apps Script endpoint
    const endpoint = "https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec";
    
    const payload = {
      ...data,
      timestamp: new Date().toISOString()
    };
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit results');
    }
    
    return true;
  } catch (error) {
    console.error('Error submitting results:', error);
    return false;
  }
};

/**
 * Play sound effect based on answer correctness
 */
export const playSound = (isCorrect: boolean): void => {
  try {
    const sound = document.getElementById(
      isCorrect ? 'correct-sound' : 'incorrect-sound'
    ) as HTMLAudioElement;
    
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};