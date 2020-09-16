const express = require("express");
const router = express.Router();
const rankModel = require("../models/rankModel");

router.get("/", async (req, res) => {
    const rankData = await rankModel.getAll();
    // console.log("rankData". rankData);
    res.render("template", {
        locals: {
            title: "Language Ranks",
            data: rankData,
        },
        partials: {
            partial: "partial-ranks",
        },
    });
});

module.exports = router;