const express = require("express");

const app = express();

// app.use(exprees.urlencoded({extended: true}));
// app.use(exprees.json());

app.get("/", (req, res ) => {
    var all =[
          {
            "name": "Donald Trump",
            "role": "candidate",
            "votes": 20,
            "party": "republicans",
            "age": 15
          },
          {
            "name": "John Doe",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
          {
            "name": "Rahul",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
          {
            "name": "Don",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
          {
            "name": "Rohit",
            "role": "candidate",
            "votes": 10,
            "party": "republicans",
            "age": 15
          },
          {
            "name": "Ajay",
            "role": "candidate",
            "votes": 5,
            "party": "republicans",
            "age": 15
          },

    ]
    res.send(JSON.stringify(all))
})
app.post("/user/create", (req, res, next ) => {

  var create =[
          {
            "name": "Donald Trump",
            "role": "candidate",
            "votes": 20,
            "party": "republicans",
            "age": 15
          },
          {
            "name": "John Doe",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
          {
            "name": "Rahul",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
          {
            "name": "Don",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
          {
            "name": "Ajay",
            "role": "candidate",
            "votes": 5,
            "party": "republicans",
            "age": 15
          },

    ]
    res.send(JSON.stringify(create))
})

app.post("/user/login", (req, res, next ) => {

    var login =[
            {
              "name": "Donald Trump",
              "role": "candidate",
              "votes": 20,
              "party": "republicans",
              "age": 15
            },
            {
              "name": "Rahul",
              "role": "voter",
              "username": "john",
              "password": "1234",
              "age": 15,
              "token": "6f85eca06c"
            },
            
            {
              "name": "Ajay",
              "role": "candidate",
              "votes": 5,
              "party": "republicans",
              "age": 15
            },
  
      ]
      res.send(JSON.stringify(login))
  })
  app.post("/user/logout", (req, res, next ) => {

    var logout =[
            {
              "name": "Donald Trump",
              "role": "candidate",
              "votes": 20,
              "party": "republicans",
              "age": 15
            },
            
  
      ]
      res.send(JSON.stringify(logout))
  })

  app.get("/votes/party/:party", (req, res, next ) => {

    var party =[
            {
              "name": "Donald Trump",
              "role": "candidate",
              "votes": 20,
              "party": "republicans",
              "age": 15
            },
            {
                "role": "candidate",
                "votes": 20,
                "party": "republicans",
                "age": 15
            },
            
            {
              "name": "Ajay",
              "role": "candidate",
              "votes": 20,
              "party": "republicans",
              "age": 15
            },
  
      ]
      res.send(JSON.stringify(party))
  })
  app.get("/votes/voters/", (req, res, next ) => {

    var voters =[
        {
            "name": "Rahul",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
          {
            "name": "viyay",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
            
          {
            "name": "nitesh",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
  
      ]
      res.send(JSON.stringify(voters))
  })

  app.post("/votes/voter/:user", (req, res, next ) => {

    var voters =[
        {
            "name": "Rahul",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
          {
            "name": "viyay",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
            
          {
            "name": "nitesh",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
  
      ]
      res.send(JSON.stringify(voters))
  })

  app.get("/votes/count/:users", (req, res, next ) => {

    var voters =[
        {
            "name": "Rahul",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
          {
            "name": "viyay",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
            
          {
            "name": "nitesh",
            "role": "voter",
            "username": "john",
            "password": "1234",
            "age": 15,
            "token": "6f85eca06c"
          },
  
      ]
      res.send(JSON.stringify(voters))
  })
  const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log("Server started on http://localhost:8080")
}) 
