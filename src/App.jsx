import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import PageLoading from "./components/global/PageLoading";
import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
