const axios = require('axios');
const logUpdate = require('log-update');

const concurrentWorkers = require('./concurrentWorkers');

module.exports = async function getContentIDs(contentType) {
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
        return axios.get(`http://xivapi.com/${contentType}?page=${page},limit=100,columns=ID`);
    }
};
