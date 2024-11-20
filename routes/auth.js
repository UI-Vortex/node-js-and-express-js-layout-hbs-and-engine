import { Router } from "express";
const router = Router()

router.get('/login', (req, res) => {
    res.render("login", {
        title: 'Login | Walker',
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register | Walker',
    })
})

router.post("/login", (req, res) => {
    res.redirect('/')
})

router.post("/register", (req, res) => {
    res.redirect('/')
})

export default router