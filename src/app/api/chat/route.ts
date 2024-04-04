import { OpenAIStream, StreamingTextResponse } from "ai";
import { OpenAI } from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API_KEY,
	apiKey: process.env.GROQ_API_KEY!,
	baseURL: "https://api.groq.com/openai/v1",
})

//export const runtime = "edge";

export async function POST(req: Request) {

  const { messages } = await req.json()

  const content= "Eres un asistente virtual, debes responder a las preguntas de los usuarios en español pero si te hablan en otro idioma, puedes responder en ese idioma. Si no sabes la respuesta, puedes decir que no sabes o que no entiendes la pregunta."
  const systemMessage: ChatCompletionMessageParam= {
    role: "system",
    content
  }

  messages.unshift(systemMessage)

  const messagesCount = messages.length
  console.log(messagesCount)
  console.log(messages)

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    // model: 'gpt-4',
		model: "mixtral-8x7b-32768",
    stream: true,
    messages: messages,
  })


  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
