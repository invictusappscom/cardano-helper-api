import express from 'express'

export class StatusRoute {

    public static async status(req: express.Request, res: express.Response) {
        res.status(200).json({
            message: 'Server is alive.',
        })
    }
}