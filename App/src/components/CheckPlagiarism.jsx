import { createSignal } from "solid-js";
import { _getPlagiarismResult } from "../services/apiServices";

function CheckPlagiarism({ setCurrentState, setPlagiarismResponse }) {
  const [article, setArticle] = createSignal(null);

  function check() {
    setCurrentState("plagiarismCheck");
    _getPlagiarismResult(article()).then((res) => {
      setPlagiarismResponse(res);
      setCurrentState("plagiarismResult");
    });
  }

  return (
    <div class="grow">
      <div class="w-full mb-4 rounded-lg">
        <div class="px-3 py-2">
          <div class="border border-theme-purple bg-theme-lightpurple p-1.5 rounded-lg">
            <label for="editor" class="sr-only">
              Check Plagiarism
            </label>
            <textarea
              id="editor"
              rows="8"
              class="block w-full p-2 text-sm bg-theme-lightpurple border-0 rounded-lg"
              placeholder="Paste your article here."
              onInput={(e) => setArticle(e.currentTarget.value)}
              required
            ></textarea>
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="ml-3 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-theme-sparkling rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-theme-purple"
        onClick={check}
      >
        Check plagiarism
      </button>
    </div>
  );
}

export default CheckPlagiarism;
