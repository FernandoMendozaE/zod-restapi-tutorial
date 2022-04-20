import { Request, Response } from 'express'
import {
  CreateProductType,
  UpdateProducBodyType,
  UpdateProducParamsType,
  UpdateProducQueryType
} from '../schemas/product.schema'

// * Definiciones
// ? unknown - definicion de una propiedad con valor desconocido

export const createProduct = (
  req: Request<unknown, unknown, CreateProductType, unknown>,
  res: Response
) => {
  const { name, price } = req.body
  res.send('creating product')
}

export const updateProduct = (
  req: Request<UpdateProducParamsType, unknown, UpdateProducBodyType, UpdateProducQueryType>,
  res: Response
) => {
  console.log(req.body, req.params, req.query)
  const { id } = req.params
  const { name, price } = req.body
  const { title } = req.query

  console.log(id, name, price, title)
  res.send('updating product')
}
