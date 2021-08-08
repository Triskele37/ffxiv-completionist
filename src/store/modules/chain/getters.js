import {vStore} from "../../index";

export const getters = {
    idExistsInStore: (state) => (id) => {
        // Matches start task
        if(state.chainStart && state.chainStart.task && state.chainStart.task.id === id) {
            return true;
        }

        // Only instance of duplicate quest ids in the game
        if(id === 66210) return false;

        // Matches embedded chained tasks
        for(const path in state.chainedTasks) {
            if(state.chainedTasks[path][`x${id}`]) {
                return true;
            }
        }

        return false;
    }
};
