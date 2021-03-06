const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const startApp = async () => {
  await app.prepare()
  createServer((req, res) =>
    handle(req, res, parse(req.url || '', true))
  ).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line
  })
}

startApp()
