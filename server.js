const http = require("http")
const Koa = require("koa")
const koaBody = require("koa-body")
const cors = require("@koa/cors")
const mailDb = require("./db")
const Router = require("koa-router")

const app = new Koa()

app.use(cors())

app.use(
	koaBody({
		urlencoded: true,
		json: true
	})
)

const router = new Router()

router.get("/messages/unread", async ctx => {
	mailDb.generateMessages()

	ctx.response.body = JSON.stringify(mailDb.messages)
})

router.get("/", async ctx => {
	mailDb.generateMessages()

	ctx.response.body = JSON.stringify(mailDb.messages)
})

app.use(router.routes()).use(router.allowedMethods())

const server = http.createServer(app.callback())

const port = process.env.PORT || 3000

server.listen(port, err => {
	if (err) {
		console.log(err)

		return
	}

	console.log("Server is listening to " + port)
})
