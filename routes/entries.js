import { Router } from 'express'
import * as entriesCtrl from '../controllers/entries.js'

const router = Router()

//GET /entries
router.get('/', entriesCtrl.index)

export {
  router
}