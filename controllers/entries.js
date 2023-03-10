import { Entry } from '../models/entry.js'

function index(req, res) {
  Entry.find({})
    .populate("owner")
    .then(entries => {
      res.render('entries/new', {
        entries,
        title: "All Entries / Add Entry",
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}

function create(req, res) {
  req.body.help = !!req.body.help
  req.body.owner = req.user.profile._id
  Entry.create(req.body)
    .then(entry => {
      console.log(entry)
      res.redirect('/entries')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

function show(req, res) {
  Entry.findById(req.params.id)
    .populate('owner')
    .then(entry => {
      res.render('entries/show', {
        title: "Your Entry",
        entry
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

function flipHelp(req, res) {
  // find the entry
  Entry.findById(req.params.id)
    .then(entry => {
      // flip the help
      entry.help = !entry.help
      // save the entry
      entry.save()
        .then(() => {
          // redirect
          res.redirect(`/entries/${entry._id}`)
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

function edit(req, res) {
  Entry.findById(req.params.id)
    .then(entry => {
      res.render('entries/edit', {
        entry,
        title: 'Edit your Entry'
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

function update(req, res) {
  Entry.findById(req.params.id)
    .then(entry => {
      console.log('update function works')
      if (entry.owner.equals(req.user.profile._id)) {
        entry.updateOne(req.body)
          .then(() => {
            res.redirect(`/entries/${entry._id}`)
          })
      } else {
        throw new Error('🚫 Not authorized 🚫')
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

function deleteEntry(req, res) {
  Entry.findById(req.params.id)
    .then(entry => {
      if (entry.owner.equals(req.user.profile._id)) {
        entry.delete()
          .then(() => {
            res.redirect(`/entries`)
          })
      } else {
        throw new Error('🚫 Not authorized 🚫')
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

export {
  index,
  create,
  show,
  update,
  edit,
  flipHelp,
  deleteEntry as delete,
}