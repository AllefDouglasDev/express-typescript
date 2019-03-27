import { Router } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Enjoy the silence...')
})

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

export default routes