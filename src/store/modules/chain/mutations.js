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
    if(!state.chainedTasks[path]) state.chainedTasks[path] = {};

    // Init first time a task is hit
    if(!state.chainedTasks[path][`x${chained.task.id}`]) {
        state.chainedTasks[path][`x${chained.task.id}`] = {
            ...chained,
            count: 1
        };
    }
    else {
        // Indicate if a task is chained through multiple times
        state.chainedTasks[path][`x${chained.task.id}`].count++;
    }

    state.chainedTasks = Object.assign({}, state.chainedTasks);
    state.chainedTaskCount++;
}
