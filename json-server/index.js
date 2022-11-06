const companies = require('./companies.json');
const items = require('./items.json');

const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router({
	companies,
	items
});

const middlewares = jsonServer.defaults();

server.use(cors());
server.get("/tags", (req, res) => {
	const tagMap = {};
	items.forEach((item) => {
		item.tags.forEach((tag) => {
			if (!tagMap[tag]) tagMap[tag] = 0;

			tagMap[tag]++;
		});
	});

	res.send(tagMap);
});

server.get("/brands", (req, res) => {
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