import express from 'express';
const app = express();

app.get('/api/hello', (req, res) => {
  res.status(200).json({ mensagem: 'Olá, Lucineia!' });
});

export default app; // Exporta o app para ser usado pelo servidor Vercel
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});