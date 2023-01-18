import { Router } from 'express'
import * as entriesCtrl from '../controllers/entries.js'

const router = Router()

//GET /entries
router.get('/', entriesCtrl.index)
router.post('/new', entriesCtrl.index)
router.put('/edit', entriesCtrl.index)
router.get('/new', entriesCtrl.index)

export {
  router
}