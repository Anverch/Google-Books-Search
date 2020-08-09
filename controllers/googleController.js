import { Search } from '../scripts/googleApi';

module.exports = {
    search: async (req, res)=> {
        const result = await Search(req.params.searchTerm);
        res.json(result);
    }
}
