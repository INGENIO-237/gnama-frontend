import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import CustomAuth0Provider from "./auth/CustomAuth0Provider.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <CustomAuth0Provider>
          <AppRoutes />
          <Toaster visibleToasts={1} position="top-right" richColors />
        </CustomAuth0Provider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
