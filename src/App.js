import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ElonMain from "./components/ElonMain";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [stated, setStated] = useState([]);
  const [useActive, setUseActive] = useState({});
  const [useSecondActive, setSecondUseActive] = useState({});
  const [useThirdActive, setThirdUseActive] = useState({});
  const [useFourthActive, setForthUseActive] = useState({});
  const [useFifthActive, setFifthUseActive] = useState({});
  const onActives = (state) => {
    setUseActive(state);
  };
  const onSecondActives = (state) => {
    setSecondUseActive(state);
  };
  const onThirdActives = (state) => {
    setThirdUseActive(state);
  };
  const onFourthActives = (state) => {
    setForthUseActive(state);
  };
  const onFifthActives = (state) => {
    setFifthUseActive(state);
  };
  let selected = [];
  selected.push(useActive);
  let filteredCategory =
    (useActive && useActive.id) ||
    (useSecondActive && useSecondActive.id) ||
    (useThirdActive && useThirdActive.id) ||
    (useFourthActive && useFourthActive.id) ||
    (useFifthActive && useFifthActive.id)
      ? stated.filter((state) =>
          selected.some((data) => state.id.includes(data.id))
        )
      : stated;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={
              <Main
                onActives={onActives}
                useActive={useActive}
                useSecondActive={useSecondActive}
                onSecondActives={onSecondActives}
                onThirdActives={onThirdActives}
                useThirdActive={useThirdActive}
                useFourthActive={useFourthActive}
                onFourthActives={onFourthActives}
                useFifthActive={useFifthActive}
                onFifthActives={onFifthActives}
              />
            }
          />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/elon"
            element={
              <ElonMain
                OrtgaTitle={`${useActive?.name} ${useSecondActive?.name} ${useThirdActive?.name} ${useFourthActive?.name} ${useFifthActive?.name}`}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
