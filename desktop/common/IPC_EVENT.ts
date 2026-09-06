export enum IPC_EVENT {
    APP_READY = 'onAppReady',
    APP_REFRESH = 'onAppRefresh',
	GET_DATA = 'getData',
	
    GET_CONFIG = 'getConfig',
    SET_CONFIG = 'setConfig',
    NEW_SAVE = 'newSave',
    LOAD_SAVE = 'loadSave',
    OPEN_CONFIG = 'openConfig',
    BACKUP_CONFIG = 'backupConfig',
    LOAD_BACKUP_CONFIG = 'loadBackupConfig',
    
	GET_SAVE = 'getSave',
    SET_SAVE = 'setSave',
    OPEN_SAVE = 'openSave',
    BACKUP_SAVE = 'backupSave',
    LOAD_BACKUP_SAVE = 'loadBackupSave',
    
    IMPORT_CUSTOM = 'importCustom',
    EXPORT_CUSTOM = 'exportCustom',
    
	SEARCH_CONSOLE_GAMES = 'searchConsoleGames',
    SEARCH_GAMER_ESCAPE = 'searchGamerEscape',
    SEARCH_GARLAND_TOOLS = 'searchGarlandTools',
    OPEN_IN_GARLAND_TOOLS = 'openInGarlandTools',
    OPEN_IN_TEAMCRAFT = 'openInTeamcraft'
}
