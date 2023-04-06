import { Switch, Match } from "solid-js/web";
import { createSignal, createEffect } from "solid-js";

import Loader from "../components/Loading";
import CheckPlagiarism from "../components/CheckPlagiarism";
import PlagiarismResult from "../components/PlagiarismResult";
import RephraseResult from "../components/RephraseResult";

import {
  _getPlagiarismResult,
  _getRephraseResult,
} from "../services/apiService";

function Landing() {

  const [currentState, setCurrentState] = createSignal("default");
  const [plagiarismResponse, setPlagiarimResponse] = createSignal(null);
  const [rephraseResponse, setRephraseResponse] = createSignal(null);

  createEffect(() => {

    switch (currentState()) {
      case "plagiarismCheck":
        _getPlagiarismResult().then((res) => {
          setPlagiarimResponse(res);
          setCurrentState("plagiarismResult");
        });
        break;
      case "rephraseCheck":
        _getRephraseResult().then((res) => {
          setRephraseResponse(res);
          setCurrentState("rephraseResult");
        });
        break;
    }

  });

  return (
    <>
      <main>
        <div class="bg-white text-theme-black flex justify-center pb-20">
          <div class="sm:mt-14 mt-28 px-30">
            <div class="xl:text-9xl text-6xl text-center">
              <span>Easy </span>
              <span class="font-light">plagiarism </span>
              <span class="text-theme-purple font-light">checker</span>
            </div>
            <div class="flex justify-center mt-12 px-10">
              <Switch fallback={<Loader />}>
                <Match when={currentState() === "default"}>
                  <CheckPlagiarism setCurrentState={setCurrentState} />
                </Match>
                <Match when={currentState() === "plagiarismResult"}>
                  <PlagiarismResult
                    plagiarismResponse={plagiarismResponse}
                    setCurrentState={setCurrentState}
                  />
                </Match>
                <Match when={currentState() === "rephraseResult"}>
                  <RephraseResult
                    rephraseResponse={rephraseResponse}
                    setCurrentState={setCurrentState}
                  />
                </Match>
              </Switch>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Landing;
