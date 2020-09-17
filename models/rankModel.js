const db = require('./conn');

class RankList {
    constructor (language_name, rank_name) {
        this.language_name = language_name;
        this.rank_value = rank_name;
    }

    static async getAll() {
        try {
            const response = await db.any(
                `SELECT * FROM topics 
                INNER JOIN ranking_scale 
                ON topics.rank_id = ranking_scale.id
                ORDER BY topics.id;`
                );
            return response;
        } catch (error) {
            console.error("ERROR:", error);
            return error;
        }
    }

    static async getAllStatuses() {
        try {
            const response = await db.any(`SELECT * FROM ranking_scale;`);
            return response;
        } catch (error) {
            console.error("ERROR:", error);
            return error;
        }
    }

    static async updateData(language_name, rank_id) {
        try {
            const response = await db.result(
                `UPDATE topics SET rank_id = $1 WHERE language_name = $2`, [rank_id, language_name]
            );
            return response;
        } catch (error) {
            console.error("ERROR:", error);
            return error;
        }
    }
}

module.exports = RankList;