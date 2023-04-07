import { Switch, Match } from "solid-js/web";

function Loader({ currentState }) {
  return (
    <>
      <div role="status" class="grow mt-10 space-y-2.5 animate-pulse">
        <div class="bg-gray-200 rounded-full font-medium text-sm text-gray-600 px-0.5">
          {currentState() === "plagiarismCheck"
            ? "Checking for plagiarism ..."
            : "Rephrasing your article ..."}
        </div>
        <div class="flex items-center w-full space-x-2">
          <div class="h-2.5 bg-theme-loadingpurple rounded-full w-full"></div>
          <div class="h-2.5 bg-gray-200 rounded-full sm:w-80"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2">
          <div class="h-2.5 bg-gray-200 rounded-full w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
          <div class="bg-theme-loadingpurple rounded-full text-center text-white h-2.5 sm:w-24"></div>
        </div>

        <div class="flex items-center w-full space-x-2">
          <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
          <div class="h-2.5 bg-gray-200 rounded-full sm:w-80"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2">
          <div class="bg-theme-loadingpurple rounded-full text-center text-white h-2.5 sm:w-96"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2">
          <div class="h-2.5 bg-gray-200 rounded-full w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2">
          <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
          <div class="h-2.5 bg-gray-200 rounded-full sm:w-80"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[440px]">
          <div class="h-2.5 bg-gray-300 rounded-full w-32"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-24"></div>
          <div class="h-2.5 bg-gray-200 rounded-full w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2">
          <div class="h-2.5 bg-gray-200 rounded-full w-full"></div>
          <div class="h-2.5 bg-theme-loadingpurple rounded-full w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[480px]">
          <div class="h-2.5 bg-gray-200 rounded-full w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2">
          <div class="h-2.5 bg-theme-loadingpurple rounded-full w-32"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-24"></div>
          <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </>
  );
}

export default Loader;
