module.exports = function isValidContentConfig(content) {
    // Initialize common properties
    if(!content.config.API_ENDPOINT) content.config.API_ENDPOINT = '';
    if(!content.config.TOTAL_ITEMS) content.config.TOTAL_ITEMS = 0;
    if(!content.config.FAILED_IDS) content.config.FAILED_IDS = [];

    // Validate config
    let message = '';

    if(!content.config.API_ENDPOINT) message += 'Missing API_ENDPOINT\n';
    if(!content.getCachePath) message += 'Missing path segment transform for raw file write\n';

    // Output and return
    if(message) {
        console.log('ERRORS:');
        console.log(message);
    }
    return !message;
};
