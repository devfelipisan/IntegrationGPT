"use client";

import { useEffect } from "react";

export default function MyPage() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `${process.env.OPENAI_API_KEY}`);

        const raw = JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: "O que é você?",
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
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return <div>Fetching data...</div>;
}
