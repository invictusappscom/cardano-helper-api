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
            skh: await CardanoService.addrToStakeKeyHash(req.body.address)
        })
    }

    public static async getHash(req: express.Request, res: express.Response) {
        
        res.status(200).json(await CardanoService.addrToHash(req.body.address))
    }
}