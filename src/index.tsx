import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import {Provider as ChakraProvider} from "@/components/ui/provider";
import {Provider as ReduxProvider} from "react-redux";
import {persistor, store} from "@/store";
import {PersistGate} from "redux-persist/integration/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);