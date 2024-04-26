require('dotenv').config()
const { OpenAI } = require('openai')
const express = require('express')
const app = express()
app.use(express.json())

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const openai = OpenAI(OPENAI_API_KEY)

app.post('/pergunte-ao-chatgpt', (req, res) => {
    console.log(OPENAI_API_KEY)
    res.send('ok')
})

const PORT = 4000
app.listen(PORT, () => console.log(`Em execução na porta ${PORT}`))