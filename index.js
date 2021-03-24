const sqlString = require('sqlstring');

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
