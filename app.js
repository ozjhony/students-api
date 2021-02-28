/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
);


app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("../Api-Rest/middleware/getIpAddres");
app.use("*", ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api.");
});

// User Routes Loading
const userRoutes = require("./routes/user.routes");
userRoutes(app);

// token middleware
//tkFn = require("./middleware/verifyToken")
//app.use(tkFn)

// Student Routes Loading
const studentRoutes = require("./routes/student.routes");
studentRoutes(app);

// Teacher Routes Loading
const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes(app);

// Period Routes Loading
const periodRoutes = require("./routes/period.routes");
periodRoutes(app);

// Course Routes Loading
const courseRoutes = require("./routes/course.routes");
courseRoutes(app);

const student_groupRoutes=require("./routes/student_group.routes");
student_groupRoutes(app);

const groupRoutes=require("./routes/group.routes");
groupRoutes(app);

//faculty Routes loading
//const facultyRoutes = require("./routes/faculty.routes");
//facultyRoutes(app);

//program Routes loading
//const ProgramRoutes = require("./routes/program.routes");
//ProgramRoutes(app);

app.listen(port, () => {
    console.log("Server is running...")
});