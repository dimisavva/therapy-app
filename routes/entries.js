import { Router } from 'express'
import * as entriesCtrl from '../controllers/entries.js'

const router = Router()

//GET /entries
router.get('/', entriesCtrl.index)
router.get('/:id', entriesCtrl.show)
router.post('/:id/edit', isLoggedIn, entriesCtrl.edit)
router.put('/edit', entriesCtrl.update)

export {
  router
}