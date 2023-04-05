import TextField from "./common/TextField";

function CheckPlagiarism({ setCurrentState }) {

  return (
    <div class="grow">
      <TextField />
      <button
        type="submit"
        class="ml-3 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-theme-sparkling rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-theme-purple"
        onClick={() => setCurrentState("plagiarismCheck")}
      >
        Check plagiarism
      </button>
    </div>
  );
}

export default CheckPlagiarism;
