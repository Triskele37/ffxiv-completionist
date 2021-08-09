import {vStore} from "../../index";

export const getters = {
    idExistsInStore: (state) => (id, toFlag) => {
        // Matches start task
        if(state.chainStart && state.chainStart.task && state.chainStart.task.id === id) {
            return true;
        }

        // Only instance of duplicate quest ids in the game
        if(id === 66210) return false;

        // Matches embedded chained tasks
        for(const path in state.chainedTasks) {
            const change = state.chainedTasks[path][`x${id}`];
            if(!!change) {
                if(change.task.isNumericCompletion) {
                    // Allow numeric tasks to chain through if toFlag is greater
                    return parseInt(change.fromFlag) >= parseInt(toFlag);
                }

                return true;
            }
        }

        return false;
    }
};
