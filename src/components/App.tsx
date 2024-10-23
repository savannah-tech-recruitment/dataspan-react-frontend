import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "styles";
import AppLayout from "./layout";

const Home = lazy(() => import("pages/Home"));
const PokeMonPage = lazy(() => import("pages/Pokemon"));
const CanvasPage = lazy(() => import("pages/Canvas"));

const App: React.FC = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokeMonPage />} />
          <Route path="/canvas" element={<CanvasPage />} />
        </Route>
      </Routes>
    </Suspense>
  </main>
);

export default App;
