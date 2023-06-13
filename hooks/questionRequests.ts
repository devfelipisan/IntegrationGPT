export async function QuestionRequest(body: string) {
  const result = fetch("/api/chatgpt", {
    method: "post",
    body,
  }).then(async (response) => await response.json().then((data) => data));

  return result;
}
