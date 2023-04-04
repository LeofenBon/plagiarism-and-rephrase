import { A } from "@solidjs/router";
import TextField from "../components/TextField";
function Landing() {
  return (
    <>
      <main>
        <div class="bg-white text-theme-black flex justify-center pb-20">
          <div class="sm:mt-14 mt-28 px-30">
            <div class="xl:text-9xl text-6xl text-center">
              <span>Easy </span>
              <span class="font-light">plagiarism </span>
              <span class="text-theme-purple font-light">checker.</span>
            </div>

            <div class="flex justify-center mt-12 px-10">
              <div class="grow">
                <TextField />
                <button
                  type="submit"
                  class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-theme-sparkling rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
                >
                  Check plagiarism
                </button>
              </div>
              <div class="grow">
                <TextField />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Landing;
