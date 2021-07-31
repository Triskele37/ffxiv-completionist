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

function startChain(state, task) {
    state.chainStart = { task, fromFlag: task.completionFlag };
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
