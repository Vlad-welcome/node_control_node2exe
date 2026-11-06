import { Routes, Route } from "react-router-dom";

import { Main } from "./pages/index.js";

export default function App() {
  //deploy Vercel

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}
