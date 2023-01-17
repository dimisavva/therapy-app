import { Router } from 'express'

const router = Router()

//GET /intries
router.get('/', entriesCtrl.index)

export {
  router
}