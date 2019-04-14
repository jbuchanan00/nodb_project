const express = require("express")
const statistics = require("./controllers/Statistics")

const app = express()

const port = 4527

app.use(express.json())

app.get("/api/statistics", statistics.get)
app.post("/api/statistics", statistics.create)
app.put("/api/statistics/:id", statistics.updateById)
app.delete("/api/statistics/:id", statistics.deleteById)

app.listen(port, () => {
    console.log("listening on port:", port)
})