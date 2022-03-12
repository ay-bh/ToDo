const express = require("express");
const bodyParser = require("body-parser");


const app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");

app.use(express.static("public"));
let items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function (req, res) {

    let today = new Date();

    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        kindOfDay: day,
        newListItems: items
    }); 

});

app.post("/", function (req, res) {
let item = req.body.newItem;
    items.push(item); 
res.redirect("/");

})






app.listen(8967, console.log("Server Started"));