const express = require("express");
const app = express();

app.use(express.json());

var students = [
    { id: 1, name: "Faheem" },
    { id: 2, name: "Waleed" },
    { id: 3, name: "Ibad" }
]


app.get("/ig", function(req, res) {
    res.send("Hello from the Basic Function")

});

app.get("/arrow", (rec, res) => {
    res.send("Hello from the Basic Arrow Function")
});

app.get("/", (rec, res) => {
    console.log("Students list is Fetched:")
    res.send("The students are in BATCH 01" + JSON.stringify(students))
});


app.post("/student", (req, res) => {

    var student = {
        id: students.length + 1,
        name: req.body.name
    }
    students.push(student)
    console.log("The Current Students are " + students.length)
    res.send("The student is Added");

})

//Update
app.put("/student/:id", (req, res) => {
    var student = students.find(s => s.id === parseInt(req.params.id))
    student.name = req.body.name
    res.send("Record is Updated.")
        // console.log(req.params.id);
        // res.send("Okay ID is receives")
})



app.delete("/student/:id", (req, res) => {
    var student = students.find(s => s.id === parseInt(req.params.id))
    var index = students.indexOf(student);
    students.splice(index, 1)
    res.send("Record is Deleted")

})




app.listen(5000, function() {
    console.log("The Server is Up on Port 5000")
})