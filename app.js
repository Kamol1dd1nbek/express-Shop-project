const express = require('express');
const config = require('config');
const exHbs = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();


const hbs = exHbs.create({
    defaultLayout: "main",
    extname: "hbs"
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views")
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mainRoute = require("./routes/main.routes");

app.use(mainRoute);

const start = async () => {
    try {
        await mongoose.connect(config.get("atlasUri"), {useNewUrlParser: true});
        const PORT = config.get("port") || 3030;
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        })
    } catch (error) {
        console.log("Serverda xatolik", error);
    }
}
start();