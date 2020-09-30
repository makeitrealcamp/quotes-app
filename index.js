const express = require("express")
const quotes = require("./quotes")

const app = express()
app.use(express.json())

// nuestra primera ruta
app.get('/quotes', (req, res) => {
  res.json(quotes.list())
})

// ruta para crear frases
app.post('/quotes', (req, res) => {
  const { text, author } = req.body
  const quote = quotes.create(text, author)
  res.json(quote)
})

app.patch('/quotes/:id', (req, res) => {
  const { text, author } = req.body
  quotes.edit(req.params.id, text, author)
  res.status(204).send()
})

app.delete('/quotes/:id', (req, res) => {
  quotes.destroy(req.params.id)
  res.status(204).send()
})

app.listen(3000, () => console.log("Servidor listo ..."))
