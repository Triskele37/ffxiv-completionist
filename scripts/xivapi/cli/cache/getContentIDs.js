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
        let url = `http://xivapi.com/search?indexes=${content.API_ENDPOINT}`;
        url += "&ids"; // Allows xivapi to return data faster
        url += `&page=${page}`;
        url += `&limit=${IDS_PER_PAGE}`;

        if(!!content.filterParams) url += `&filters=${content.filterParams}`;

        return axios.get(url);
    }
};
