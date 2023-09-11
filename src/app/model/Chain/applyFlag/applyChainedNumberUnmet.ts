import { applyUnmetNumberToTask } from '../applyFlag/applyUnmetNumberToTask';
import { Chainer } from '../Chainer';
import { Links } from '../ChainLink';
import { getAllTasksFor } from '../getAllTasksFor';

// Chain when a numeric is not met
export function applyChainedNumberUnmet(chainer: Chainer, cList: Links, num: string): void {
    const newNum = (parseInt(num, 10) - 1).toString();
    getAllTasksFor(chainer, cList).forEach(
        (task, i, arr) => applyUnmetNumberToTask(newNum, task, arr.length)
    );
}
