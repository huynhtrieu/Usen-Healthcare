import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "@/store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18next from 'i18next';
import '@/translates/i18n';

import AppRoutes from "@/routes";
import Init from "./init";
import { AuthProvider } from "@/contexts/authContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18next}>
          <Init>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </Init>
        </I18nextProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
