const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000
const connectToMongo = require("./db")


app.use(cors())

app.use(express.json())
connectToMongo()
app.use("/api/tournament",require("./routes/tournament"))
app.use("/api/teams",require("./routes/teams"))
 app.use("/api/groupstage",require("./routes/groupstage"))
 app.use("/api/match",require("./routes/matchs"))
 app.use("/api/filteredteam",require("./routes/filteredteam"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})