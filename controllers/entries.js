import { Entry } from '../models/entry.js'

function index(req, res){
Entry.find({})
.then(entries => {
  res.render('entries/new', {
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

function show(req, res) {
  Entry.findById(req.params.id)
  .populate('owner')
  .then(taco => {
    res.render('entries/show', {
      title:  "show",
      entry
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}

function update(req, res) {
  Entry.findById(req.params.id)
  .then(entry => {
    if (entry.owner.equals(req.user.profile._id)) {
      req.body.entry = !!req.body.entry
      entry.updateOne(req.body)
      .then(()=> {
        res.redirect(`/entry/${entry._id}`)
      })
    } else {
      throw new Error('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}

function edit(req, res) {
  Entry.findById(req.params.id)
  .then(entry => {
    res.render('entries/edit', {
      entry,
      title: 'edit '
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/entries')
  })
}

export{
  index,
  create,
  show,
  update,
  edit,
}