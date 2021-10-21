const filterNames = ['all', 'today', 'favorites', 'repeating', 'archive'];
const generateFilter = () => {
    return filterNames.map((item, i) => {
        return {
            name: item,
            count: Math.floor(Math.random()*10),
            disabled: i === 3
        }
    })
};
export {generateFilter}