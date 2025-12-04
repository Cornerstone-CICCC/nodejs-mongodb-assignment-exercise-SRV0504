import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRoutes from './product.routes'

dotenv.config()

const app = express()
app.use(express.json())

// 👇 después de declarar app
app.use('/products', productRoutes)

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
