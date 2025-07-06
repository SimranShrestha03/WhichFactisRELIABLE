# Which Fact Is Reliable?

An interactive quiz app to test users' ability to distinguish facts from myths about COVID-19.

## Features

- Engaging quiz interface with 10 randomly selected questions from a pool of 50
- 7-second timer for each question with visual countdown
- Audio and visual feedback for correct/incorrect answers
- Tracks user performance across sessions (no repeated questions)
- Anonymous data collection for research purposes

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Google Sheets Integration

To set up the Google Sheets integration:

1. Create a new Google Sheet
2. Go to "Extensions" > "Apps Script"
3. Replace the code with the following:

```javascript
function doGet() {
  return HtmlService.createHtmlOutput("The server is running!");
}

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append a new row with the data
    sheet.appendRow([
      new Date(),
      data.age,
      data.gender,
      data.score,
      JSON.stringify(data.answers)
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString() 
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Deploy the script:
   - Click "Deploy" > "New Deployment"
   - Select type "Web app"
   - Set "Execute as" to "Me"
   - Set "Who has access" to "Anyone"
   - Click "Deploy"
   - Copy the provided URL

5. Update the endpoint URL in `src/utils/storage.ts` with your deployment URL.

## Audio Files

The app requires two audio files for feedback:
- `public/sounds/clap.mp3` - Played for correct answers
- `public/sounds/nahh.mp3` - Played for incorrect answers

You can use any short audio clips with these filenames.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Lucide React for icons
- Local Storage for tracking used questions