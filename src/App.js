import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./Components/Weather";
import Metal from "./Components/Metal";

const App = () => {
  const pageSize = 6;
  const newsApiKey = "88cbb525accf4bb0940f20611e1bd918";
  const weatherApiKey = "3678d7754a9e47a1b0e163642232501";
  const metalApiKey =
    "u55dxt1qijyln61xh2fxvc365msuh503z4pzpfgb3yg5p85315712iv2hjaw";

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              apiKey={newsApiKey}
              key="home"
              pageSize={pageSize}
              country={"in"}
              category={"general"}
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apiKey={newsApiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category={"business"}
            />
          }
        ></Route>
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={newsApiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        ></Route>
        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={setProgress}
              apiKey={newsApiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        ></Route>
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apiKey={newsApiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        ></Route>
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={newsApiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        ></Route>
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={newsApiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        ></Route>
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={newsApiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        ></Route>
        <Route
          exact
          path="/weather"
          element={
            <Weather
              setProgress={setProgress}
              apiKey={weatherApiKey}
              location="bhilai"
              category="weather"
            />
          }
        ></Route>
        <Route
          exact
          path="/metal"
          element={
            <Metal
              setProgress={setProgress}
              apiKey={metalApiKey}
              currency="INR"
              metalType="XAU"
              category="metal"
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
