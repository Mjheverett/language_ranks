const db = require('./conn');

class RankList {
    constructor (language_name, rank_name) {
        this.language_name = language_name;
        this.rank_value = rank_name;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM topics INNER JOIN ranking_scale ON topics.rank_id = ranking_scale.id;`);
            return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = RankList;