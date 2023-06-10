import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

async function ChatInitial() {
  const configuration = new Configuration({
    organization: "org-ZZRxRk4CRLKBZunZ4U2jPTSu",
    apiKey: "Bearer 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",
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "Assistente apto para responder qualquer pergunta",
      },
      { role: "user", content: "Olá quem é você?" },
    ],
  });

  const listModel = await openai.listModels();

  console.log(process.env.OPENAI_API_KEY);
  console.log(listModel);
  console.log(response.data.choices[0].message);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ChatInitial();

  res.status(200).json("pong!");
}
