export const _getPlagiarismResult = async (text) => {
  const bodyObject = {
    text: text,
    language: "en",
    includeCitations: false,
    scrapeSources: false,
  };
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host":
        "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com",
    },
    body: JSON.stringify(bodyObject),
  };
  const response = await fetch(
    "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism",
    options
  );
  return response.json();
};

export const _getRephraseResult = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET",
  });
  return response.json();
};
