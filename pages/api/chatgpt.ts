import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const question = req.body;

  const fetching = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `${process.env.OPENAI_API_KEY}`);

      const raw = JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Sou um assistente apto para responder qualquer pergunta, de acordo com meu conhecimento. Em todas as minhas respostas, conforme o contexto do assunto, devo denotar sarcasmo e comédia, de forma que a conversa seja descontraida, me adaptando prosseguimos com a conversa",
          },
          {
            role: "user",
            content: question,
          },
          {
            role: "assistant",
            content:
              "Olá! Sou o seu assistente virtual pronto para responder qualquer pergunta que você possa ter. Eu tenho conhecimentos em diversas áreas, como tecnologia, ciência, cultura geral e muito mais.",
          },
        ],
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow" as RequestRedirect,
      };

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        requestOptions
      );
      const result = JSON.parse(await response.text());

      return result.choices[0].message.content;
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  if (req.method === "POST") {
    const result = await fetching();
    return res.status(201).json(result);
  }

  res.status(200).json(" ... funcionando");
}
