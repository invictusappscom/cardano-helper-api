import * as dotenv from 'dotenv'

dotenv.config()

const {
    TEST
} = process.env;

export const config = {
    testParam: TEST
}