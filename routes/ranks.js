const express = require("express");
const router = express.Router();
const rankModel = require("../models/rankModel");

const renderPage = async res => {
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
}

router.get("/", async (req, res, next) => {
    renderPage(res);
});

router.post("/", async (req,res) => {
    for (let key in req.body) {
        if (req.body[key] !== '') {
            await rankModel.updateData(key, req.body[key]);
        }
    }
    renderPage(res);
})

module.exports = router;