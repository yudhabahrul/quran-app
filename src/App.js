import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.scss";
import { FadeLoader } from "react-spinners";

const Sidebar = lazy(() => import("./component/Sidebar"));
const Topbar = lazy(() => import("./component/Topbar"));
const Surah = lazy(() => import("./component/Surah"));
const Favorit = lazy(() => import("./component/Favorit"));
const Info = lazy(() => import("./component/NoContent"));

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <FadeLoader
            color="rgb(23, 146, 119)"
            loading={isLoading}
            size={150}
            aria-label="Loading"
            data-testid="loader"
          />
        </div>
      ) : (
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Topbar />
            <Sidebar />
            <div className="content">
              <Suspense fallback={<div></div>}>
                <Routes>
                  <Route path="/" element={<Surah />} />
                  <Route path="favorit" element={<Favorit />} />
                  <Route path="info1" element={<Info />} />
                  <Route path="info2" element={<Info />} />
                  <Route path="info3" element={<Info />} />
                </Routes>
              </Suspense>
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      )}
    </>
  );
};

export default App;
