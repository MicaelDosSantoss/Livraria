const express = require("express");
const controller = require("../controllers");
const router = express.Router();


router.get('/lista',controller.LivrosListas);
router.get('/lista/:id',controller.LivrosId);
router.put('/update/:id',controller.Update)
router.delete('/delete/:id',controller.destuir)
router.get('/cadastro',controller.cadastro);
router.post('/cadastro',controller.store);



module.exports = router;