const express = require('express');
const {engine} = require('express-handlebars');

const app = express();

app.set("view engine", "hbs");
app.engine("hbs", engine({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "default",
    partialsDir: __dirname + "/views/partials",
}));
app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.render ('index'), {
        welcomeText: "hihi",
        user: "user name"
    }
})
app.get('/javascript', (req, res)=>{
    res.render ('javascript'), {
        welcomeText: "javascript",
    }
})
app.get('/node', (req, res)=>{
    res.render ('node'), {
        welcomeText: "Node",
    }
})
app.listen(8000, ()=>{
    console.log('App is running on port 8000')
})