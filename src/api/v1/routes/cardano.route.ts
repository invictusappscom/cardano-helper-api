import express from 'express'
import CardanoService from '../../../services/cardano.service'

export class CardanoRoute {

    public static async getPublicKeyHash(req: express.Request, res: express.Response) {
        res.status(200).json({
            pkh: await CardanoService.addrToPubKeyHash(req.body.address)
        })
    }

    public static async getStakeKeyHash(req: express.Request, res: express.Response) {
        res.status(200).json({
            pkh: await CardanoService.addrToStakeKeyHash(req.body.address)
        })
    }
}