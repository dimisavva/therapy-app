import { Router } from 'express'
import * as activitiesCtrl from '../controllers/activities.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET /activities
router.get('/', activitiesCtrl.index)
// router.get('/', activitiesCtrl.new)
router.get('/:id', isLoggedIn, activitiesCtrl.show)
router.get('/:id/edit', isLoggedIn, activitiesCtrl.edit)
router.post('/', isLoggedIn, activitiesCtrl.create)
// router.patch('/:id/flip-help', isLoggedIn, activitiesCtrl.flipHelp)
router.put('/:id', isLoggedIn, activitiesCtrl.update)
router.delete('/:id', isLoggedIn, activitiesCtrl.delete)

export {
  router
}