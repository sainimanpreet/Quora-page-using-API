const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
    //set
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id : uuidv4(),  //"1a",
        username : "arjitaarora",
        content : "i love coding!"
    },
    {
        id : uuidv4(),//"2b",
        username : "arjitaarora",
        content: "i got selected in google internship"
    },
    {
        id : uuidv4(), //"3c",
        username : "arjitaarora",
        content:"hard work is important to achieve success"
    },
];

app.get("/posts",(req,res) => {
   // res.send("server working well");
    res.render("index.ejs",{posts});
});
app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});


app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
   console.log(id);
   // res.send("request working");
   let post = posts.find((p) => id === p.id);
  // console.log(post);
  // res.send("request woeking");
   res.render("show.ejs", {post});
});



app.post("/posts",(req,res) =>{
    let { username , content } = req.body;
    let id = uuidv4();
    posts.push({id,username, content});
   // res.send("posts request working");
   res.redirect("/posts");
    });

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
   // console.log(id);
   // console.log(newContent);
   let post = posts.find((p) => id === p.id);
   post.content = newContent;
   console.log(post);
  //  res.send("patch request working");
   res.redirect("/posts")

});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
   // let post = posts.find((p) => id === p.id);
    posts = posts.filter((p) => id !== p.id);
   // res.send("delete success");
   res.redirect("/posts");
});


app.listen(port,()=>{
    console.log("listening to the port: 3000");
});
