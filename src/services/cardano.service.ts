// import * as CardanocliJs from 'cardanocli-js'
import { config } from '../config';
import Loader from './helpers/loader'

class CardanoService {

    public static async addrToPubKeyHash(bech32Addr) {
        await Loader.load()
        const S = Loader.Cardano
        const pkh = S.BaseAddress.from_address(
            S.Address.from_bech32(bech32Addr)
        )
            .payment_cred()
            .to_keyhash();

        console.log(Buffer.from(pkh.to_bytes()).toString('hex'))
        return Buffer.from(pkh.to_bytes()).toString('hex');
    }

    public static async addrToStakeKeyHash(bech32Addr) {
        await Loader.load()
        const S = Loader.Cardano
        const skh = S.BaseAddress.from_address(
            S.Address.from_bech32(bech32Addr)
        )
            .stake_cred()
            .to_keyhash();

        console.log(Buffer.from(skh.to_bytes()).toString('hex'))
        return Buffer.from(skh.to_bytes()).toString('hex');
    }

    public static async addrToHash(bech32Addr) {
        await Loader.load()
        const S = Loader.Cardano
        const skh = S.BaseAddress.from_address(
            S.Address.from_bech32(bech32Addr)
        )
            .stake_cred()
            .to_keyhash();
        const pkh = S.BaseAddress.from_address(
            S.Address.from_bech32(bech32Addr)
        )
            .payment_cred()
            .to_keyhash();
    
        console.log(Buffer.from(skh.to_bytes()).toString('hex'))
        console.log(Buffer.from(pkh.to_bytes()).toString('hex'))
        return {
            pkh: Buffer.from(pkh.to_bytes()).toString('hex'),
            skh: Buffer.from(skh.to_bytes()).toString('hex')
        };
    }
}

export default CardanoService