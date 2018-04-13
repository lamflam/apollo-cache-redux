"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge = require("lodash/merge");
var cloneDeep = require("lodash/cloneDeep");
var constants_1 = require("./constants");
var initialState = {};
function apolloReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case constants_1.APOLLO_RESET:
            return initialState;
        case constants_1.APOLLO_OVERWRITE:
            return action.data;
        case constants_1.APOLLO_WRITE:
            var newObj = cloneDeep(state);
            return merge(newObj, action.data);
        default:
            return state;
    }
}
exports.apolloReducer = apolloReducer;
//# sourceMappingURL=reducer.js.map