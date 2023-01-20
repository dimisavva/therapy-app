import { Activity } from '../models/activity.js'

function index(req, res){
Activity.find({})
.then(activities => {
  res.render('activities/new', {
    activities,
    title: "Add Activity", 
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
  Activity.create(req.body)
  .then(activity => {
    res.redirect('/activities')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Activity.findById(req.params.id)
  .populate('owner')
  .then(activity => {
    res.render('activities/show', {
      title: "show",
      activity
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Activity.findById(req.params.id)
  .then(activity => {
    res.render('activities/edit', {
      activity,
      title: 'edit'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  Activity.findById(req.params.id)
  .then(activity => {
    if (activity.owner.equals(req.user.profile._id)) {
      activity.updateOne(req.body)
      .then(()=> {
        res.redirect(`/activities/${activity._id}`)
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

function deleteActivity(req, res) {
  // console.log("FUNCTION DELETE activity IS RUNNING")
  Activity.findById(req.params.id)
  .then(activity => {
    if (activity.owner.equals(req.user.profile._id)) {
      activity.delete()
      .then(()=> {
        res.redirect(`/activities`)
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

export{
  index,
  create,
  show,
  update,
  edit,
  deleteActivity as delete,
}