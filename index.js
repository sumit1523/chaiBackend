require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000;

const  githubData = {
    login: "sumit1523",
    id: 34701534,
    node_id: "MDQ6VXNlcjM0NzAxNTM0",
    avatar_url: "https://avatars.githubusercontent.com/u/34701534?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/sumit1523",
    html_url: "https://github.com/sumit1523",
    followers_url: "https://api.github.com/users/sumit1523/followers",
    following_url: "https://api.github.com/users/sumit1523/following{/other_user}",
    gists_url: "https://api.github.com/users/sumit1523/gists{/gist_id}",
    starred_url: "https://api.github.com/users/sumit1523/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/sumit1523/subscriptions",
    organizations_url: "https://api.github.com/users/sumit1523/orgs",
    repos_url: "https://api.github.com/users/sumit1523/repos",
    events_url: "https://api.github.com/users/sumit1523/events{/privacy}",
    received_events_url: "https://api.github.com/users/sumit1523/received_events",
    type: "User",
    site_admin: false,
    name: "sumit kumar",
    company: null,
    blog: "https://sumit-kumar-portfolio.vercel.app/",
    location: "Bengaluru",
    email: null,
    hireable: true,
    bio: "MERN Developer",
    twitter_username: null,
    public_repos: 79,
    public_gists: 0,
    followers: 4,
    following: 21,
    created_at: "2017-12-20T04:37:54Z",
    updated_at: "2024-02-16T12:36:59Z"
    }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("twitter")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login </h1>')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${port}`)
})