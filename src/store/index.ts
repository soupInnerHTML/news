import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import newsReducer from './slices/newsSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['news'],
};

const persistedReducer = persistReducer(persistConfig, newsReducer);

const store = configureStore({
    reducer: {
        news: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
                ignoredPaths: ['register'],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };
