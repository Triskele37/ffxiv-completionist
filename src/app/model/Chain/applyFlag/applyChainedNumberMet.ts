import { applyMetNumberToTask } from '../applyFlag/applyMetNumberToTask';
import { Chainer } from '../Chainer';
import { Links } from '../ChainLink';
import { getAllTasksFor } from '../getAllTasksFor';

// Chain when a numeric is met
export function applyChainedNumberMet(chainer: Chainer, cList: Links, num: string): void {
    getAllTasksFor(chainer, cList).forEach(
        (task) => applyMetNumberToTask(num, task)
    );
}
