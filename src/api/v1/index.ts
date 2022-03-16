import { Router } from 'express'
import { StatusRoute } from './routes/status.route'
import { TestRoute } from './routes/test.route'
import { CardanoRoute } from './routes/cardano.route'
import PostTestValidator from './validators/test.validator'


const v1 = Router()

v1.get('/status', StatusRoute.status)
v1.post('/test',
    PostTestValidator.validatePostTestSchema(),
    TestRoute.testPost)
v1.post('/cardano/addr2pkh',
    CardanoRoute.getPublicKeyHash)
v1.post('/cardano/addr2skh',
    CardanoRoute.getStakeKeyHash)
v1.post('/cardano/addr2hash',
    CardanoRoute.getHash)

export default v1
