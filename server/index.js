const express = require("express");
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const cors = require('cors');
//heroku
// const keys = require("./config/keys");

const app = express();
app.use(bodyparser.json());
app.use(cors());

// mongoose.connect(
//     'mongodb+srv://amey:amey96@cluster0.uexep.mongodb.net/grocery?retryWrites=true&w=majority'
//     // keys.mongo_uri
// );

var url = 'mongodb+srv://amey:amey96@cluster0.uexep.mongodb.net/grocery?retryWrites=true&w=majority';
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})

.then(
    (result) => {
        console.log("conecting to db...");
        // server.listen(PORT);
        console.log("server started");
    }
)
.catch(
    (err) => {
        // res.send(err);
        console.log(err);
    }
)


app.get('/', (req, res) => {
    res.send({ project: "Grocery App" });
});

app.use('/grocery', require("./routes/route"));

//heroku code
// if (process.env.NODE_ENV == "production") {
//     app.use(express.static("client/build"));
//     const path = require("path");
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//     });
// }


const PORT = process.env.PORT || 8888;
app.listen(PORT);


/*in server create 1 folder config(add these files )-
 1. keys.js
 2. dev.js
 3. prod.js
*/
// in client side use npm run build, after build folder is created in react