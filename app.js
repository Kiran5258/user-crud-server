import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
const users = [
  { id: 1, name: "John", displayname: "anson" },
  { id: 2, name: "Jack", displayname: "jack" },
  { id: 3, name: "Jill", displayname: "jill" },
  { id: 4, name: "Mike", displayname: "mikey" },
  { id: 5, name: "Sara", displayname: "sari" },
  { id: 6, name: "Tom", displayname: "tommy" },
  { id: 7, name: "Emma", displayname: "emma" },
  { id: 8, name: "Leo", displayname: "lion" },
  { id: 9, name: "Nina", displayname: "nini" },
  { id: 10, name: "Ryan", displayname: "ryry" },
  { id: 11, name: "Chris", displayname: "crispy" },
];


//main get method
app.get("/", (req, res) => {
  res.status(200).send({ msg: "hello world" });
});

//user data display
app.get("/api/users", (req, res) => {
  console.log(req.query);
  const {
    query: { filter, value },
  } = req;
  if (!filter && !value) return res.send(users);
  if (filter && value)
    return res.send(users.filter((user) => user[filter].includes(value)));
  res.send(users);
});


app.post("/api/users", (req, res) => {
  console.log(req.body);
  const { body } = req;
  if (!body.name || !body.displayname) {
    return res.status(400).send({ msg: "Name and displayname are required" });
  }
  const newuser = { id: users[users.length - 1].id + 1, ...body };
  users.push(newuser);
  return res.status(201).send(newuser);
});

app.get("/api/product", (req, res) => {
  res.send([{ id: 1, name: "chicken", price: 299 }]);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const parmasid = parseInt(req.params.id);
  if (isNaN(parmasid)) return res.status(400).json({ msg: "invaild id" });
  const finduser = users.find((user) => user.id === parmasid);
  if (!finduser) return res.sendStatus(400);
  return res.status(200).json(finduser);
});

app.put("/api/users/:id",(req,res)=>{
    const {body,params:{id}}=req;
    const paramsid=parseInt(req.params.id);
    if(isNaN(paramsid)) return res.sendStatus(400)
    const finduserindex=users.findIndex((user)=>user.id ===paramsid)
    if(finduserindex===-1)return res.sendStatus(404)
    users[finduserindex]={id:paramsid,...body};
    return res.sendStatus(200)
})

app.patch("/api/users/:id",(req,res)=>{
    const {body,params:{id}}=req;
    const paramsid=parseInt(id);
    if(isNaN(paramsid)) return res.sendStatus(400)
    const finduserindex=users.findIndex((user)=>user.id ===paramsid)
    if(finduserindex===-1)return res.sendStatus(404)
    users[finduserindex]={...users[finduserindex],...body};
    return res.sendStatus(200)
})

app.delete("/api/users/:id",(req,res)=>{
    const {params:{id}}=req;
    const parseid=parseInt(id);
    if(isNaN(parseid))return res.sendStatus(404);
    const finduserindex=users.findIndex((user)=>user.id===parseid);
    if(finduserindex === -1)return res.sendStatus(404);
    users.splice(finduserindex);
    return res.sendStatus(200);
})

app.listen(PORT, () => {
  console.log(`https:localhost:${PORT}`);
});
