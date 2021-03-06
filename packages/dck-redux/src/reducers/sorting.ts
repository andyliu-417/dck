import { fromJS } from "immutable";

import { DckActionTypes } from "../actions/types";
import { createReducer } from "../utils";

/**
 * Sorting reducer initial state.
 */
const initialState = fromJS({
  sortingOptions: []
});

/**
 * Global sort reducer.
 * Can be used to apply sort options for all items in the system
 * @hidden
 */
export const sorting = createReducer(initialState, {
  [DckActionTypes.SET_SORTING_OPTIONS](state: any, action: any) {
    return state.set("sortingOptions", action.sortingOptions);
  }
});
