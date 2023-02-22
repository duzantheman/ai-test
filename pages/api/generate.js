import { Configuration, OpenAIApi } from "openai";
import { execName, execProfile } from "./data";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

let qaContext = ''

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const animal = req.body.animal || '';
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid animal",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(animal),
      temperature: 0.1,
      max_tokens: 1000,
    });
    res.status(200).json({ result: {
      answer: completion.data.choices[0].text,
      usage: completion.data.usage,
    } });

    console.log('result - choices', completion.data)
    
    qaContext = `${qaContext}
    
    Question: ${animal}
    Answer: ${completion.data.choices[0].text.trim()}`
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

const execProfileToPromptData = execProfile.map((folder) => {
  return folder.sections.map((section) => {
    return section.fields.map((field) => {
      return `${field.label}: ${field.value}`
    }).join('\n')
  }).join('\n')
}).join('\n')

function generatePrompt(userPrompt) {
  const prompt = `Executive Name: ${execName}
  
  ${execProfileToPromptData}

  ${qaContext}

  Question: ${userPrompt}`;

  console.log('prompt:\n', prompt)

  return prompt
}
