const mongoose = require("mongoose")
const app = require("./app")

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

mongoose.connect(
    "mongodb+srv://victordiogo2801_db_user:victor2801@cluster0.d4xde7i.mongodb.net/students"
)
mongoose.connection.once("open", () => {
    console.log("Conectado ao mongoDB")
})
mongoose.connection?.on("error", (err) => {
    console.error(`Error to connect - MongoDB: Error: ${err.message}`)
})