const express = require("express")
const {getClinic} = require("./clinic-service")

const router = express.Router()

router.get("/clinics", async (req, res, next) => {
    const query = req.query;
    try {
        const clinics = await getClinic()
        res.status(201).send(clinics)
    } catch (err) {
        next(err)
    }
})


module.exports = router