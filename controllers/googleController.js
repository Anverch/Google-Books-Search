import { Search } from '../scripts/googleApi';

module.exports = {
    search: async (req, res)=> {
        console.log("hello")
        const result = await Search(req.params.searchTerm);
        res.json(result);
    }
}
