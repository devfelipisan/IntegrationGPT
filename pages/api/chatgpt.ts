import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-ZZRxRk4CRLKBZunZ4U2jPTSu",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function chatGPTHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //     const fetchData = async () => {
  //         try {
  //           const response = await fetch('https://api.example.com/data');
  //           const jsonData = await response.json();
  //           setData(jsonData);
  //         } catch (error) {
  //           console.error('Erro ao buscar os dados:', error);
  //         }
  //       };

  //       var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Authorization", "Bearer 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");

  // var raw = JSON.stringify({
  //   "model": "gpt-3.5-turbo",
  //   "messages": [
  //     {
  //       "role": "user",
  //       "content": "O que é você?"
  //     }
  //   ]
  // });

  // var requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: 'follow'
  // };

  // fetch("https://api.openai.com/v1/chat/completions", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));

  res.status(200).json("test");
}
