export const testGPT = (question) => {
  const data = JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: '' },
      { role: 'user', content: question },
    ],
  });

  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + process.env.EXPO_PUBLIC_OPEN_AI_API_KEY,
    },
    body: data,
  }).then((response) => response.json());
};
