import { Router } from 'express'
import * as entriesCtrl from '../controllers/entries.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET /entries
router.get('/', entriesCtrl.index)
// router.get('/', entriesCtrl.new)
router.get('/:id', isLoggedIn, entriesCtrl.show)
router.get('/:id/edit', isLoggedIn, entriesCtrl.edit)
router.post('/', isLoggedIn, entriesCtrl.create)
router.patch('/:id/flip-help', isLoggedIn, entriesCtrl.flipHelp)
router.put('/:id', isLoggedIn, entriesCtrl.update)
router.delete('/:id', isLoggedIn, entriesCtrl.delete)

export {
  router
}