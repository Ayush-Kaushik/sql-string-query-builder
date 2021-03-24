const sqlString = require('sqlstring');

/**
 * Creates an SQL query
 * @param {*} queryTemplate - Template string with placeholder for values
 * @param {*} queryParams - Object that contains values corresponding to placeholder
 * @returns query string
 */
const buildQuery = (queryTemplate, queryParams) => {
    const query = queryTemplate.replace(/\@(\w+)/g, (matched, index, original) => {
        if (queryParams.hasOwnProperty(matched)) {
            return sqlString.escape(queryParams[matched]);
        }

        return null;
    });

    return query;
}

module.exports = {
    buildQuery
}
