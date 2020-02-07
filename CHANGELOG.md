# Changelog

## [0.0.2] - Current
### Additions
- Changelog
- **Completion Summaries**
- Ability to toggle between **Summary** and **All Task** modes
- Navigation
    - Navigation via clicking **Breadcrumbs**
    - **FFXIV Checklist** menu item
    - Previously open navigation is saved when app closes
    - **Debug** menu item
- **Task Table**
    - Column search
    - Conditional styling mechanism
    - Completion filtering
- Data
    - **Sheet Import** Functionality
    - Summary totals added to saved data for performance
    - Complete 5.18 sheet data entry

### Changes
- Right-click to exclude tasks

### Fixes
- Storage persistence issue
- **BLU Spellbook** names missing
- **Task Table**
    - **Filter** & **Search** not sticky on scroll
    - Non-primitive data displayed in columns

## [0.0.1] - Initial
- Navigation
    - **Navigation Drawer** style menu
    - **Breadcrumb** display
- **Task Table**
    - Task display
    - Column filtering
- Data
    - Majority of 5.11 sheet data
    - `electron-store` Storage mechanism
- `electron-vue` package for build tooling
