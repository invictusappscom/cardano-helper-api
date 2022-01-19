import express from 'express'
import TestService from '../../../services/test.service'

export class TestRoute {

    public static async testPost(req: express.Request, res: express.Response) {
        res.status(200).json({
            message: TestService.returnBody(req.body)
        })
    }
}