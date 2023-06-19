const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.get("/books", async (req, res) => {
  const books = await prisma.books.findMany();
  if (books.length > 0) {
    res.json(books);
  } else {
    res.status(404).json({ message: "Nenhum livro encontrado" });
  }
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  const books = await prisma.books.findUnique({ where: { id: parseInt(id) } });
  res.json(books);
});

app.post("/books/insert", async (req, res) => {
  const { titulo, autor, descricao } = req.body;
  const newUser = await prisma.books.create({
    data: { titulo, autor, descricao },
  });
  res.json(newUser);
});

app.put("/books/update/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, descricao } = req.body;
  const updatedBook = await prisma.books.update({
    where: { id: parseInt(id) },
    data: { titulo, autor, descricao },
  });
  res.json(updatedBook);
});

app.delete("/books/deactivate/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.books.delete({ where: { id: parseInt(id) } });
  res.json({ message: "Livro excluído com sucesso" });
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
