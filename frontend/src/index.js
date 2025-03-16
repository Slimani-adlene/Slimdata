import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactPage from "./pages/ContactPage";
import DataSciencePage from "./pages/DataSciencePage";
import AnalysePredictivePage from "./pages/AnalysePredictivePage";
import CloudBigDataPage from "./pages/CloudBigDataPage";
import RealisationsPage from "./pages/RealisationsPage";
import FreeIaModelsPage from "./pages/FreeIaModelsPage";
import RealisationsMachineLearning from "./pages/RealisationsMachineLearning";
import RealisationsDeepLearning from "./pages/RealisationsDeepLearning";
import RealisationsAnalysePredictive from "./pages/RealisationsAnalysePredictive";
import RealisationsModelisationIA from "./pages/RealisationsModelisationIA";
import DataAnalysisPage from "./pages/DataAnalysisPage";
import ProcessAutomationPage from "./pages/ProcessAutomationPage";
import PresentationPage from "./pages/PresentationPage";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/data-science" element={<DataSciencePage />} />
        <Route path="/analyse-predictive" element={<AnalysePredictivePage />} />
        <Route path="/cloud-big-data" element={<CloudBigDataPage />} />
		<Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/free-ia-models" element={<FreeIaModelsPage />} />
		<Route path="/realisations/machine-learning" element={<RealisationsMachineLearning />} />
        <Route path="/realisations/deep-learning" element={<RealisationsDeepLearning />} />
        <Route path="/realisations/analyse-predictive" element={<RealisationsAnalysePredictive />} />
        <Route path="/realisations/modelisation-ia" element={<RealisationsModelisationIA />} />
		<Route path="/analyse-donnees" element={<DataAnalysisPage />} />
		<Route path="/automatisation-processus" element={<ProcessAutomationPage />} />
		<Route path="/presentation" element={<PresentationPage />} />


      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
