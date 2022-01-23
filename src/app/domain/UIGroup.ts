type Config = {
    name: string;
    component?: any;
    noContent?: boolean;
    visible?: boolean;
    subGroups?: Config[];
};

export class UIGroup {
    name: string;
    noContent: boolean;
    component: any;
    visible: boolean; // Whether to hide in the nav-drawer

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
        this.visible = config.visible !== false;
    }

    get groupPath(): string[] {
        return this._parent ? [...this._parent.groupPath, this.name] : [this.name];
    }
}
