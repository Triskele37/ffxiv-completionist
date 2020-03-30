const axios = require("axios");

module.exports = async function(xivApiUrl) {
    let aggregated = [];
    let done = false;

    console.log(`Paging: ${xivApiUrl}`);
    console.log('');

    for(let page = 1; !done; page++) {
        try {
            // Get and combine the next page's results
            const { data } = await axios.get(`${xivApiUrl}&page=${page}`);
            aggregated = aggregated.concat(data.Results);

            // Update Progress
            console.log(`Page ${page}/${data.Pagination.PageTotal}`);

            // Finish if there is no next page
            if(data.Pagination.Page === data.Pagination.PageTotal) done = true;
        }
        catch(e) {
            console.error(e);
            done = true;
        }
    }

    return aggregated;
};
