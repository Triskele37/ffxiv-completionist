import { ChangeStore } from "./utils";

export const migrate_5_3_to_5_31 = () => {
    const overall = new ChangeStore('0.5.31');

    overall.write();
};
