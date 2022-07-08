const { user, book, cart } = require("../../models") 

//== Menambahkan Cart
exports.addCart = async (req, res) => {
    try {
        let idUser = req.user.id //idUser memiliki parameter req 

        let data= { // disini objek bernama Data memiliki property idUser dan variabel idUser
            idUser: idUser,
            idProduct: req.body.idProduct,
            total: 0, 
            qty: 0,
        }

        let getProduct = await book.findOne({
            where: {
                id: data.idProduct,
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
             },
        })

        data = {
            ...data,
            total:getProduct.price,
            qty: 1
        }

        let addCart = await cart.create(data)

        res.send({
            status:"Succes",
            addCart,
        })

    } catch (error) {
        console.log(error);
        res.send({
        status: "Failed",
        message: "Kesalahan Menambahkan Cart",
        });       
    }
}