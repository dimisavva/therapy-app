import { Entry } from '../models/entry.js'

function index(req, res){
Entry.find({})
.then(entries => {
  res.render('entries/index', {
    entries,
    title: "Add Entry", 
  })
})
.catch(err => {
  console.log(err)
  res.redirect("/")
})
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Entries.create(req.body)
  .then(entry => {
    res.redirect('/entries')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}


export{
  index
}