const express = require("express")
const {getClinic, searchClinic} = require("./clinic-service")

const router = express.Router()

router.get("/clinics", async (req, res, next) => {
    try {
        const clinics = await getClinic()
        res.status(200).send(clinics)
    } catch (err) {
        next(err)
    }
})


router.get("/searchClinics", async (req, res, next) => {
    const query = req.body;
    try {
        const filteredclinics = await searchClinic(query)
        res.status(200).send(filteredclinics)
    } catch (err) {
        next(err)
    }
})

module.exports = router