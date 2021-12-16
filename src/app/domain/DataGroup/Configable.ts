import { StoreService } from '@service/store/store.service';
import { Extendable } from './BaseGroup';

export function Configable<T extends Extendable>(Base: T) {
    return class Configed extends Base {
        isCustomGroup: boolean;
        draggable: boolean;
        noContent: boolean;

        //#region--------------------------------- Column Config
        _columnConfig;

        // Only used for debugging to force an id column
        get columnConfig() {
            if(!this._columnConfig) return this._columnConfig;

            // Add an ID column when in development
            if(StoreService.eStore.get('id-column-enabled') && process.env.NODE_ENV === 'development') {
                if(this._columnConfig[0].key !== 'id') {
                    return this._columnConfig ? [{
                        header: 'ID',
                        key: 'id'
                    }, ...this._columnConfig] : [];
                }
            }

            return this._columnConfig;
        }

        //#endregion

        //#region--------------------------------- Default Completion
        _defaultCompletion = 'N';

        get defaultCompletion() {
            return this._defaultCompletion;
        }

        set defaultCompletion(value) {
            this._defaultCompletion = value;

            if(this.subGroups) {
                this.subGroups.forEach((subGroup) => subGroup.defaultCompletion = value);
            }

            for(const id in this.tasks) {
                if(this.tasks.hasOwnProperty(id) && this.tasks[id].defaultCompletion) {
                    this.tasks[id].setCompletionFlag(value);
                }
            }
        }

        //#endregion

        //#region--------------------------------- Numeric Completion
        _isNumericCompletion = false; // Used for numeric completions
        numericDecimal = 0;

        get isNumericCompletion() {
            return this._isNumericCompletion;
        }

        set isNumericCompletion(value) {
            this._isNumericCompletion = value;
            Object.values(this.tasks).forEach((task) => task.isNumericCompletion = value);
        }

        //#endregion

        //#region--------------------------------- Language
        _lang = 'en';

        get lang() {
            return this._lang;
        }

        set lang(newLang) {
            this._lang = newLang;
            (this.subGroups || []).forEach((subGroup) => subGroup.lang = newLang);
        }

        //#endregion

        //#region--------------------------------- Crafting Group
        _isCraftingLogGroup = false;

        get isCraftingLogGroup() {
            return this._isCraftingLogGroup;
        }

        // for now requires being set after subGroups are added
        set isCraftingLogGroup(value) {
            this._isCraftingLogGroup = value;
            (this.subGroups || []).forEach((sg) => sg.isCraftingLogGroup = value);
        }

        //#endregion
    };
}
