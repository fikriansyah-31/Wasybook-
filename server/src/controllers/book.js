const { book } = require("../../models")
const { Op } = require("sequelize")

//== Promo Book
exports.promoBooks = async (req, res) => {
 try {
    let data = await book.findAll({
        where: {
            price: {
                //Operator Less than or Equal ( <= ) kurang dari atau sama dengan
                [Op.lte]: 55000,
                // Jika harga buku kurang dari atau sama dengan 55000 maka akan mendapatkan promo harga
            },
        },
    })

    data = data.map((item) => {
        item.bookPdf = process.env.PATH_FILE_PDF + item.bookPdf
        item.bookImg = process.env.PATH_FILE_IMG + item.bookImg
    })

    res.send({
        status: "Success",
        data: {
            promoBooks: data,
        },
    })
 } catch (error) {
    console.log(error);
    res.send({
        status: "Failed",
        message: "Error Mengambil Promo Buku"
    })
 }
}
// Get All Book
exports.getBooks = async (req, res) => {
    try {
        let data = await book.findAll({
            raw: true,
            where: {
                price: {
                    //Operator than or equal operator ( >= ) lebih dari atau sama dengan
                    [Op.gte]: 10,
                    //Akan menampilkan data atau value yang lebih dari 10 atau sama dengan 10
                },
            },
            attributes: {
                exclude: ["createAt", "updateAt"],
            },
        })

        //Data yang di Map
        data = data.map((item) => {
            item.bookPdf = process.env.PATH_FILE_PDF + item.bookPdf
            item.bookImg = process.env.PATH_FILE_IMG + item.bookImg
        })

        res.send({
            status: "Success",
            data: {
                books: data,
            },
        })

    } catch (error) {
        console.log(error);
        res.send({
        status: "Failed",
        message: "Error Mengambil Semua Buku",
    });
    }
}
// Get Book Id 
exports.getBook = async (req, res) => {
    try {
        const { id } = req.params

        let data = await book.findOne({
            raw: true,
            where: {
                id,
            },
            attributes: {
                exclude: ["createAt", "updateAt"],
            },
        })

        data = {
            ...data,
            bookPdf: process.env.PATH_FILE_PDF + data.bookPdf,
            bookImg: process.env.PATH_FILE_IMG + data.bookImg,
        }

        res.send({
            status: "Success",
            data: {
                book: data,
            },
        })        

    } catch (error) {
        res.send({
            status: "Failed",
            message: "Kesalahan Mengambil Buku",
          });
    }
}