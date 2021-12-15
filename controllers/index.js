
const { Livro } = require('../models')


const controller = {
    LivrosListas: async (req,res) => {
        const livro = await Livro.findAll()

        res.json(livro)
    },

    store: async (req,res) => {

        const { titulo, quantidade_paginas, autor, ano_lancamento, estoque} = req.body

    const livro = await Livro.create({titulo, quantidade_paginas, autor, ano_lancamento, estoque })

    if(livro == null) {
       return res.status(404).json({mensagem: 'Não foi criado'})
    }
      return res.redirect('/livros/lista')
    
    },

    LivrosId: async (req,res) => {
        const { id } = req.params;

        const livro = await Livro.findByPk(id)

        if(livro == null) {
         return   res.status(201).json({mensagem:'O id que vc procura n existe'})
        } else {
         return   res.json(livro)
        }

        
    },

    cadastro: (req,res) => {
        res.render('cadastroLivros.ejs')
    },

    Update: async (req,res) => {

        const { id } = req.params

        const { titulo, quantidade_paginas, autor, ano_lancamento, estoque} = req.body

        const livroUp = await Livro.update({
            titulo, 
            quantidade_paginas, 
            autor, ano_lancamento, 
            estoque
        },{
            where: { id }        
        })

        if(livroUp == 1) {
            res.status(203).json({mesagem: 'alteração bem sucedida!'})
        } else {
            res.status(202).json({mesagem: 'alteração já foi feita'})
        }

        
        
    return  res.json(livroUp)
    },

    destuir: async (req,res) => {
        const { id } = req.params

        const destruir = await Livro.destroy({
          where: { id } 
        })

        if(!destruir) {
            return res.status().json({mensagem:'livro não encontrado'})
        }

        return res.status(204).send('tudo certo')

    }

}

module.exports = controller