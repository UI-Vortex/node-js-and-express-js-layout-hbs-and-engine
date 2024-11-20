import express from "express";
// import path, { dirname } from "path"
// import { fileURLToPath } from "url";
import { create } from "express-handlebars"
import AuthRoutes from './routes/auth.js'
import ProductsRoutes from './routes/products.js'
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

const app = express()

const hbs = create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(AuthRoutes)
app.use(ProductsRoutes)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.set('strictQuery', false)
const PORT = process.env.PORT || 4100
mongoose.connect(process.env.MONGO_URL, {
    uuseNewUrlParser: "true",
    useUnifiedTopology: "true"
})
mongoose.connection.on("error", err => {
    console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
})
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

// mongodb+srv://shadowmonarch1107:<db_password>@cluster0.86zj3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0