import { Router } from 'express'
import * as entriesCtrl from '../controllers/entries.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET /entries
router.get('/', entriesCtrl.index)
router.get('/:id', entriesCtrl.show)
router.post('/', isLoggedIn, entriesCtrl.create)
router.post('/:id/edit', isLoggedIn, entriesCtrl.edit)
router.put('/edit', entriesCtrl.update)

export {
  router
}