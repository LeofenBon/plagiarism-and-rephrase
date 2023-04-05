function PlagiarismResult({ setCurrentState }) {
  return (
    <>
      <div class="w-full p-4">
        <div class="flex space-x-16 border border-theme-purple bg-theme-lightpurple rounded-lg shadow sm:p-8">
          <div>
            <h5 class="mb-1 text-xl font-medium text-gray-500">
              Plagiarism Score
            </h5>
            <div class="flex items-baseline text-gray-900">
              <span class="text-5xl text-theme-purple font-bold tracking-tight">
                49
              </span>
              <span class="ml-1 text-xl font-normal text-gray-500">%</span>
            </div>
          </div>
          <ul role="list" class="space-y-5 my-4">
            <li class="flex space-x-3">
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-5 h-5 text-theme-purple"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500">
                2 article found
              </span>
            </li>
            <li class="flex space-x-3">
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-5 h-5 text-theme-purple"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-base font-normal leading-tight text-gray-500">
                20 citations found
              </span>
            </li>
          </ul>
        </div>
        <button
          type="button"
          class="text-white bg-theme-sparkling hover:bg-theme-purple focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center mt-5"
          onClick={() => setCurrentState("rephraseCheck")}
        >
          Rephrase the article
        </button>
      </div>
    </>
  );
}

export default PlagiarismResult;