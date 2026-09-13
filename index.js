const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        sucesso: true,
        mensagem: "API PixelDelta funcionando!"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API PixelDelta iniciada na porta ${PORT}`);
});