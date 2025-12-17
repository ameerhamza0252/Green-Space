import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the API client
// Note: process.env.API_KEY is injected by the environment
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "Leafy", the friendly AI assistant for "Green Space", a charity organization in Stockport, UK.
Your goal is to assist users who are interested in donating or volunteering.

About Green Space:
- Mission: To keep Stockport's green spaces (parks, woodlands, verges) clean, maintained, and thriving.
- Key Locations: We operate in Bramall Park, Etherow Country Park, Reddish Vale, and Vernon Park.
- Activities: Litter picking, tree planting, wildflower meadow creation, and educational workshops.

When answering:
1. Be enthusiastic, eco-friendly, and polite.
2. If asked about donations, explain that funds go towards equipment (litter pickers, gloves), saplings, and maintenance costs.
3. If asked about volunteering, mention we have roles for everyone: from active cleaning to administrative help.
4. Keep answers concise (under 100 words) unless asked for details.
5. If you don't know something specific (like today's exact event schedule), ask them to check the "Events" section or contact us directly.

Do not make up fake event dates.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      maxOutputTokens: 300,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't process that request right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the green network. Please check your internet or try again later.";
  }
};
