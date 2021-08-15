import { eStore } from "../../electronStore";

export const mutations = {
    CLEAR_CHAIN: clearChain,
    START_CHAIN: startChain,
    PUSH_CHAINED: pushChained,
};

//------------------------------------------------------- Chained Mutation
function clearChain(state) {
    state.chainStart = null;
    state.chainedTasks = {};
    state.chainedTaskCount = 0;
}

function startChain(state, { task, fromFlag, toFlag }) {
    const path = task._parent.groupPath;
    path.shift();

    state.chainStart = { task, fromFlag, toFlag, path: path.join(" > ") };
    state.chainedTasks = {};
    state.chainedTaskCount = 0;
}

function pushChained(state, chained) {
    const path = chained.task._parent.groupPath.join(" > ");

    // Init first time a group is hit
    if(!state.chainedTasks[path]) {
        state.chainedTasks[path] = {};
        Object.defineProperty(state.chainedTasks[path], 'show', {
            enumerable: false,
            writable: true,
            value: true
        });
    }

    // Init first time a task is hit
    const id = `x${chained.task.id}`;
    if(!state.chainedTasks[path][id]) {
        state.chainedTasks[path][id] = {
            ...chained,
            count: 1
        };
    }
    else {
        // Indicate if a task is chained through multiple times
        state.chainedTasks[path][id].count++;
    }

    // Update show prop for all chained tasks
    const show = state.chainedTaskCount < eStore.get('chain-min-threshold');
    for(let key in state.chainedTasks) {
        state.chainedTasks[key].show = show;
    }

    state.chainedTasks = Object.assign({}, state.chainedTasks);
    state.chainedTaskCount++;
}
