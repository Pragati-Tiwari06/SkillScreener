import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Header from './components/header';
import Intro from "./components/intro";
import About from "./components/about";
import Upload from "./components/upload";
import ResultSection from "./components/ResultSection";
import SignInSignUp from './components/SignInSignUp';

function App() {
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);
  const uploadRef = useRef(null);
  const authRef = useRef(null);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  useEffect(() => {
    if (showAuth && authRef.current) {
      authRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showAuth]);

  const scrollToUpload = () => {
    if (uploadRef.current) {
      uploadRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App bg-gray-50 min-h-screen">
      <Header setShowAuth={setShowAuth} />
      <Intro scrollToUpload={scrollToUpload} />
      <About />
      <div ref={uploadRef}>
        <Upload onResult={setResult} />
      </div>
      {result && (
        <div ref={resultRef}>
          <ResultSection result={result} />
        </div>
      )}
      {showAuth && (
        <div ref={authRef}>
          <SignInSignUp />
        </div>
      )}
    </div>
  );
}

export default App;
