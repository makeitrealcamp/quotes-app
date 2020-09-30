const quotes = []
let nextId = 0

function list() {
  return quotes
}

function create(text, author) {
  const quote = { id: nextId, text, author }
  quotes.push(quote)
  nextId++

  return quote
}

function edit(id, text, author) {
  const idx = quotes.findIndex(q => q.id === id)
  if (idx >= 0) {
    quotes[idx].text = text
    quotes[idx].author = author
  }
}

function destroy(id) {
  const idx = quotes.findIndex(q => q.id === id)
  if (idx >= 0) {
    arry.splice(idx, 1)
  }
}

module.exports = { list, create, edit, destroy }
