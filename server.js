const express = require('express');
require('dotenv').config();
const {GoogleGenerativeAI} = require("@google/generative-ai");
const app = express();

const bob = process.env.BOB
console.log(bob);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

  res.sendFile(__dirname + '/public/index.html');
});

app.get("/api/excuse", async (req, res) =>{
  try {
    const prompt = req.query;
    const genAI = new GoogleGenerativeAI(bob);
    const model = genAI.getGenerativeModel({model : "gemini-2.0-flash"});
    const question = prompt.prompt;
    const result = await model.generateContent(question);
    const response = await result.response.candidates[0]["content"]["parts"][0]["text"];
    res.status(200).json({response});
  } catch (error) {
    console.log("popop" + error)
  }
  
});

// const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});

// app.get('/api/excuse', async (req, res) => {
//   try {

//     const prompt = "Create a believable bob excuse";
//     console.log(generativeModel);
//     const result = await generativeModel.generateContent({
//       contents: [{ role: 'user', parts: [{ text: prompt }] }]
//     });  
//     console.log(result.text)
//     const response = await result.response;
//     if (response.candidates && response.candidates.length > 0) {
//       console.log('Generated Text:', response.candidates[0].content.parts[0].text);
//     } else {
//       console.log('No response from the model.');
//     }

//     console.log('Generated excuse:', excuse);
//     res.json({ excuse });
//   } catch (error) {
//     console.error('Error generating excuse:', error.message);
//     res.status(500).json({ error: 'Failed to generate excuse' });
//   }
// });



// const { VertexAI, GenerativeModel} = require('./node_modules/@google-cloud/vertexai');
// const { GoogleAuth } = require('google-auth-library');


// // Initialize SDK
// const bob= process.env.GEMINI_API_KEY
// const ass = new GoogleAuth(
//   {
//     apiKey : bob
//   }
// );


// //console.log(ass);
// const projectId = 'udemhacks'; // Replace with your project ID
// const location = 'us-central1';
// const vertexAI = new VertexAI({
//   project: projectId,
//   location: location,
//   apiKey: bob,
// });


// // console.log
// vertexAI.googleAuth.apiKey = bob;
// vertexAI.preview.googleAuth.apiKey = bob; 


// console.log(vertexAI)
// const modelName = 'gemini-pro';
// // const modelName = 'gemini-2.0-flash-001'
// const generativeModel = new GenerativeModel({
//   model: modelName,
//   // project: projectId,
//   // location: location,

//   vertexAI: vertexAI, // Pass the initialized VertexAI instance
//   requestOptions: {
//     headers: {
//       'x-goog-api-key': bob
//     }
//   }
// });
// console.log(generativeModel)


// app.use(express.static('public'));

// app.get('/', (req, res) => {

//   res.sendFile(__dirname + '/public/index.html');
// });

// app.get('/api/excuse', async (req, res) => {
//   try {

//     const prompt = "Create a believable bob excuse";
//     console.log(generativeModel);
//     const result = await generativeModel.generateContent({
//       contents: [{ role: 'user', parts: [{ text: prompt }] }]
//     });  
//     console.log(result.text)
//     const response = await result.response;
//     if (response.candidates && response.candidates.length > 0) {
//       console.log('Generated Text:', response.candidates[0].content.parts[0].text);
//     } else {
//       console.log('No response from the model.');
//     }

//     console.log('Generated excuse:', excuse);
//     res.json({ excuse });
//   } catch (error) {
//     console.error('Error generating excuse:', error.message);
//     res.status(500).json({ error: 'Failed to generate excuse' });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



