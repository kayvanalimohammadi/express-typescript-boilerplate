import 'reflect-metadata'
import express, { Express, Request, Response, NextFunction } from 'express'
export default class Application {
    private app:Express
    constructor () {
      this.app = express()
      this.app.get('/', (req:Request, res:Response, next:NextFunction) => {
        res.json({
          message: 'App is working correctly'
        })
      })
    }

    public run (port:number) {
      this.app.listen(port, () => {
        console.log(`App is running on port ${port}`)
      })
    }
}
