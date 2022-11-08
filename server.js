const companies = require('./json-server/companies.json');
const items = require('./json-server/items.json');

const path = require("path");
const cors = require("cors");
const express = require("express");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router({
	companies,
	items
});

const middlewares = jsonServer.defaults();

server.use(cors());
server.use(express.static(path.join(__dirname, "build")));
server.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

server
	.get("/tags", (req, res) => {
		const tagMap = {};
		items.forEach((item) => {
			item.tags.forEach((tag) => {
				if (!tagMap[tag]) tagMap[tag] = 0;

				tagMap[tag]++;
			});
		});

		res.send(tagMap);
	})
	.get("/brands", (req, res) => {
		const brandMap = {};
		items.forEach(({ manufacturer }) => {
			if (!brandMap[manufacturer]) brandMap[manufacturer] = 0;

			brandMap[manufacturer]++;
		});

		res.send(brandMap);
	});

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3001;

server.listen(port, () => {
	console.log(`JSON Server is running on port ${port}`);
});