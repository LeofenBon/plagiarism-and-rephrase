function RephraseResult({ setCurrentState }) {
  return (
    <div class="grow">
      <div class="p-6 bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Your rephrased article is here:
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
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
  );
}

export default RephraseResult;
