const express = require('express');
const config = require('config');
const exHbs = require('express-handlebars');
const app = express();


const hbs = exHbs.create({
    defaultLayout: "main",
    extname: "hbs"
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views")
app.use(express.static("views"));


app.get("/", (req, res) => {
    res.render("index");
})

const start = async () => {
    try {
        const PORT = config.get("port") || 3030;
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();