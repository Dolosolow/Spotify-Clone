import { createStore } from "redux";

import { rootReducer } from "@local/store/reducer";

export const store = createStore(rootReducer);
