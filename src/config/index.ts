import * as dotenv from 'dotenv'

dotenv.config()

const {
   PORT 
} = process.env;

export const config = {
    port: PORT
}