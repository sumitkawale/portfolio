import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom'

import './index.css';
import Error404 from './Error404'
import MainApp from './App/App'
import ProjectDetails from "./App/Components/ProjectDetail"
import Resume from "./Resume/Resume"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<MainApp />} />
      <Route exact path="project/:projectIDTXT" element={<ProjectDetails />} />
      <Route exact path="resume" element={<Resume />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();  