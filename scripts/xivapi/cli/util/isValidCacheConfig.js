module.exports = function(config, additionalSegmentCallback) {
    // Initialize common properties
    if(!config.API_ENDPOINT) config.API_ENDPOINT = '';
    if(!config.TOTAL_ITEMS) config.TOTAL_ITEMS = 0;
    if(!config.FAILED_IDS) config.FAILED_IDS = [];
    if(!config.EXCLUDE_IDS) config.EXCLUDE_IDS = [];

    // Initialize flags
    if(!config.hasOwnProperty('NEW_SCRAPE')) config.NEW_SCRAPE = false;
    if(!config.hasOwnProperty('FULL_SCRAPE')) config.FULL_SCRAPE = false;
    if(!config.hasOwnProperty('FAILED_SCRAPE')) config.FAILED_SCRAPE = false;

    // Attach the additional path segment callback
    config.additionalSegmentCallback = additionalSegmentCallback;

    // Validate config
    let message = '';

    if(!config.API_ENDPOINT) message += 'Missing API_ENDPOINT\n';
    if(!config.additionalSegmentCallback) message += 'Missing path segment transform for raw file write\n';

    const methodSum = config.NEW_SCRAPE + config.FULL_SCRAPE + config.FAILED_SCRAPE;
    if(methodSum === 0) message += 'No scrape method enabled\n';
    if(methodSum > 1) message += 'Multiple scrape methods enabled\n';

    // Output and return
    if(message) {
        console.log('ERRORS:');
        console.log(message);
    }
    return !message;
};
