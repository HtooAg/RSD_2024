require("dotenv").config();

const express = require("express");
const app = express();

require("express-ws")(app);

const cors = require("cors");
app.use(cors());

app.use("/static", express.static("./photos"));

const { usersRouter } = require("./routers/users");
app.use(usersRouter);

const { postsRouter } = require("./routers/posts");
app.use(postsRouter);

const { notisRouter } = require("./routers/notis");
app.use(notisRouter);

app.listen(process.env.PORT, () => {
	console.log(`X API running at ${process.env.PORT}`);
});
