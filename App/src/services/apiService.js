export const _getPlagiarismResult = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET",
  });
  return await response.json();
};

export const _getRephraseResult = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET",
  });
  return await response.json();
};
