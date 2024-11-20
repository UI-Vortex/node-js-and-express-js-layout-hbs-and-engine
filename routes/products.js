import { Router } from "express";
const router = Router()

router.get('/', (req, res) => {
    res.render("index", {
        title: 'Boom Shop | Walker',
    })
})

router.get('/products', (req, res) => {
    res.render('products', {
        title: 'Products | Walker',
        isProducts: true,
    })
})

router.get('/add', (req, res) => {
    res.render("add", {
        title: 'Add | Walker',
    })
})


export default router