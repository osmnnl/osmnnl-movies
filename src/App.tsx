import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { App as AntdApp } from "antd";
import ErrorBoundary from "./components/ErrorBoundary";
import CustomConfigProvider from "./components/CustomConfigProvider";
import queryClient from "./utils/queryClient";
import routes from "./routes";

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <div className="App">
      <Router>
        <QueryClientProvider client={queryClient}>
          <AntdApp>
            <CustomConfigProvider>
              <ErrorBoundary>
                <AppRoutes />
              </ErrorBoundary>
            </CustomConfigProvider>
          </AntdApp>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
