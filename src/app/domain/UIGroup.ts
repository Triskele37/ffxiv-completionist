type Config = {
    name: string;
    component?: any;
    noContent?: boolean;
    subGroups?: Config[];
};

export class UIGroup {
    name: string;
    noContent: boolean;
    component: any;

    _parent: UIGroup;
    subGroups: UIGroup[];

    constructor(config: Config, parent: UIGroup) {
        this.name = config.name;

        this._parent = parent;
        this.component = config.component;
        this.subGroups = config.subGroups?.map(
            (group) => new UIGroup(group, this)
        ) || null;

        this.noContent = !!config.noContent;
    }

    get groupPath(): string[] {
        return this._parent ? [...this._parent.groupPath, this.name] : [this.name];
    }
}
