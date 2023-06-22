const app = require("./app");
require('dotenv').config()

app.listen(process.env.PORT, () => {
    console.log(`app is listening at port ${process.env.PORT}`)
})