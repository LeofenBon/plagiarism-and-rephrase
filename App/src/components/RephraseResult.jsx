function RephraseResult({ setCurrentState }) {
  return (
    <>
      <div class="w-4/5">
        <div class="p-6 bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Your rephrased article is here:
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <button
          type="submit"
          class="mt-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-theme-sparkling rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-theme-purple"
          onClick={() => setCurrentState("default")}
        >
          Start Over
        </button>
      </div>
    </>
  );
}

export default RephraseResult;
