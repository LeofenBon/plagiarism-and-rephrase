import { _getPlagiarismResult, _getRephraseResult } from "./apiServices";

function manageServices(signal, setter) {
  console.log(setter)
    switch (signal) {
      case "plagiarismCheck":
        return _getPlagiarismResult()
      case "rephraseCheck":
        return _getRephraseResult()
    }
} 

export default manageServices;