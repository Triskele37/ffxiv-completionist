const axios = require('axios');
const logUpdate = require('log-update');

const concurrentWorkers = require('./concurrentWorkers');
const IDS_PER_PAGE = 100;

module.exports = async function getContentIDs(content) {
    const { data } = await getPage(1);

    console.log('Retrieving all IDs');

    const pages = [];
    await concurrentWorkers((cur, resolve, next) => {
        const nextPage = cur.next + 1;

        if(nextPage <= data.Pagination.PageTotal) {
            logUpdate(`Page ${nextPage}/${data.Pagination.PageTotal}`);

            getPage(nextPage).then((response) => {
                pages.push(response.data.Results.map((page) => page.ID));
                next(resolve);
            });
        }
        else resolve();
    });

    logUpdate.done();

    return pages.reduce((acc, page) => {
        return acc.concat(page);
    }, []).sort((a, b) => a - b);

    function getPage(page) {
        let url = "http://xivapi.com/";

        // Some content cannot be searched via indexes
        // so url generation must be different if none exist
        if(!content.filterParams) {
            url += `${content.API_ENDPOINT}?`;
        }
        else {
            url += `search?indexes=${content.API_ENDPOINT}`;
            url += `&filters=${content.filterParams}`;
        }

        // Allows xivapi to return data faster
        url += "&ids";

        // Pagination Params
        url += `&page=${page}`;
        url += `&limit=${IDS_PER_PAGE}`;

        return axios.get(url);
    }
};
