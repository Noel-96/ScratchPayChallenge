const express = require("express")

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const clinicRouter = require("./clinic/clinic-router")


server.use("/api", clinicRouter)

server.use((err, req, res, next) => {
	console.log(err)
	
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server