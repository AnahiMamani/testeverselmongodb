const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB (troque pela sua string do MongoDB Atlas)
mongoose.connect("mongodb+srv://Anahi:1234@cluster0.zkkuczc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Criar modelo de nome
const NomeSchema = new mongoose.Schema({ nome: String });
const Nome = mongoose.model("Nome", NomeSchema);

// Rota para adicionar nome
app.post("/add", async (req, res) => {
    const novoNome = new Nome({ nome: req.body.nome });
    await novoNome.save();
    res.json({ mensagem: "Nome salvo!" });
});

// Rota para listar nomes
app.get("/nomes", async (req, res) => {
    const nomes = await Nome.find();
    res.json(nomes);
});

// Iniciar o servidor
const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
