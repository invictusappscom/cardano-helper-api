import { checkSchema, Schema, ValidationChain } from 'express-validator'

const PostTestSchema: Schema = {
    email: {
      in: ['body'],
      errorMessage: 'Email must be of correct format',
      isString: true,
      isEmail: true,
      exists: true
    }
  }
  
  // Not working needs to debug
  export default class PostTestValidator {
    public static validatePostTestSchema() : ValidationChain[] {
        return checkSchema(PostTestSchema)
    }
  }