import * as candidate from "@/data/CandidateSolutionPageData";
import * as recruiter from "@/data/RecruiterSolutionPageData";

export const solutionPageMap = {
  candidate: {
    "easy-evaluator": candidate.easyEvaluator,
    "easy-facilitator": candidate.easyFacilitator,
    "easy-scheduler": candidate.easyScheduler,
    "easy-reviewer": candidate.easyReviewer,
  },
  recruiter: {
    "easy-evaluator": recruiter.easyEvaluator,
    "easy-facilitator": recruiter.easyFacilitator,
    "easy-scheduler": recruiter.easyScheduler,
    "easy-predictor": recruiter.easyPredictor,
  },
  
};