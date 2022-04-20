import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'

export const schemaValition =
  (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        // ? parse es una funcion de zod que recibe un objeto y lo valida
        body: req.body, // ?  body es el body de la peticion
        params: req.params,
        query: req.query
      })

      next()
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json(
          error.issues.map(issue => ({
            path: issue.path,
            message: issue.message
          }))
        )
      }
      return res.status(500).json({ message: 'internal server error' })
    }
  }
