import { Request, Response } from 'express'

import User from '../schemas/User'

class UserController {
    public async index (req: Request, res: Response): Promise<Response> {
        const users = await User.find()

        return res.status(200).json({ success: true, users })
    }

    public async store (req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body)

        return res.json({ success: true, user })
    }
}

export default new UserController()