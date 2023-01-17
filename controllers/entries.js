import { Entry } from '../models/entry.js'

function index(req, res){
Entry.find({})
.then(entries => {
  res.render('entries/index')
})
}

export{
  index
}