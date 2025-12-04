import { Request, Response } from 'express'
import { Product } from './product.model'

export const ProductController = {
  async getAll(req: Request, res: Response) {
    const products = await Product.find()
    res.json(products)
  },

  async getById(req: Request, res: Response) {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ error: 'Product not found' })
    res.json(product)
  },

  async create(req: Request, res: Response) {
    const { productName, productPrice } = req.body
    const newProduct = await Product.create({ productName, productPrice })
    res.status(201).json(newProduct)
  },

  async update(req: Request, res: Response) {
    const { productName, productPrice } = req.body
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { productName, productPrice },
      { new: true }
    )
    if (!updated) return res.status(404).json({ error: 'Product not found' })
    res.json(updated)
  },

  async delete(req: Request, res: Response) {
    const deleted = await Product.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: 'Product not found' })
    res.status(204).send()
  }
}
