import { z } from 'zod'

// * Definiciones
// ? nonnegative() - nos permite definir una propiedad con valor positivo o 0
// ? optional() - nos permite definir una propiedad opcional, no se requiere su valor es opcional
// ? z.infer - es una funcion que nos permite inferir el tipo de dato de una variable o constante en zod para que no tengamos que definirlo explicitamente en el schema de zod
// ? type - permite definir un tipo de dato en zod, por ejemplo: type('string')

export const CreateProductSchema = z.object({
  body: z.object({
    name: z.string().nonempty(),
    price: z.number().nonnegative()
  })
})

export const UpdateProductSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().nonnegative().optional()
  }),
  params: z.object({
    id: z.string().min(3)
  }),
  query: z.object({
    title: z.string()
  })
})

export type CreateProductType = z.infer<typeof CreateProductSchema>['body']

export type UpdateProducBodyType = z.infer<typeof UpdateProductSchema>['body']
export type UpdateProducParamsType = z.infer<typeof UpdateProductSchema>['params']
export type UpdateProducQueryType = z.infer<typeof UpdateProductSchema>['query']
