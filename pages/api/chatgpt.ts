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
            role: "user",
            content: question,
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
