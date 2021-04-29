module.exports = function isValidContentConfig(content) {
    // Initialize common properties
    if(!content.config.API_ENDPOINT) content.config.API_ENDPOINT = '';
    if(!content.config.TOTAL_ITEMS) content.config.TOTAL_ITEMS = 0;
    if(!content.config.FAILED_IDS) content.config.FAILED_IDS = [];
    if(!content.config.EXCLUDE_IDS) content.config.EXCLUDE_IDS = [];

    // Initialize flags
    if(!content.config.hasOwnProperty('NEW_SCRAPE')) content.config.NEW_SCRAPE = false;
    if(!content.config.hasOwnProperty('FULL_SCRAPE')) content.config.FULL_SCRAPE = false;
    if(!content.config.hasOwnProperty('FAILED_SCRAPE')) content.config.FAILED_SCRAPE = false;

    // Validate config
    let message = '';

    if(!content.config.API_ENDPOINT) message += 'Missing API_ENDPOINT\n';
    if(!content.path) message += 'Missing path segment transform for raw file write\n';

    const methodSum = content.config.NEW_SCRAPE + content.config.FULL_SCRAPE + content.config.FAILED_SCRAPE;
    if(methodSum === 0) message += 'No scrape method enabled\n';
    if(methodSum > 1) message += 'Multiple scrape methods enabled\n';

    // Output and return
    if(message) {
        console.log('ERRORS:');
        console.log(message);
    }
    return !message;
};
