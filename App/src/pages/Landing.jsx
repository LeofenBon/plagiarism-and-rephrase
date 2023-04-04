import { A } from "@solidjs/router";
function Landing() {
  return (
    <>
      <main>
        <div className="bg-white text-theme-black flex justify-center pb-20">
          <div className="sm:mt-14 mt-28 px-30">
            <div className="xl:text-9xl text-6xl text-center">
              <span>Easy </span>
              <span className="font-light">plagiarism </span>
              <span className="text-theme-purple font-light">checker.</span>
            </div>

            <div className="flex justify-around mt-10 px-10">
              <div className="w-1/2">
                <div className="text-xl font-heebo">Input box goes here</div>
              </div>
              <div>Result shows here</div>
            </div>
            <div class="mt-20">
              <A
                href="/"
                class="mt-40 font-poppins text-white bg-theme-purple hover:bg-theme-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2.5 text-cente"
              >
                Get started
              </A>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Landing;
