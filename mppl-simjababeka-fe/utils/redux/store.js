import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "@/utils/redux/reducer";

const persistDefaultMiddlewareConfig = {
	serializableCheck: {
		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	},
};

const rootPersistConfig = {
	version: "beta_v01",
	key: "jababeka:root",
	storage,
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	// devTools: true,
	middleware: (getDefaultMiddleware) => {
		// return getDefaultMiddleware(persistDefaultMiddlewareConfig).concat(logger);
		return getDefaultMiddleware(persistDefaultMiddlewareConfig);
	},
});

export const { dispatch } = store;
export const persistor = persistStore(store);
export default store;
