require('dotenv').config()

const mongoose = require('mongoose')
const Phone = require('./models/phone')
let mongoString = process.env.DATABASE_URI

mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', async () => {
    console.log('Database Connected')
    await startSeeding()
    console.log('Closing connection')
    process.exit(0)
})

const phones = [
    {
        "name": "iPhone 11",
        "manufacturer": "Apple",
        "description": "Lorem fistrum pupita hasta luego Lucas elit por la gloria de mi madre.",
        "color": "black",
        "price": 605,
        "imageFileName": "IPhone_11.png",
        "screen": "6,1 inch IPS",
        "processor": "A13 Bionic",
        "ram": 4
    },
    {
        "name": "A 53",
        "manufacturer": "Samsung",
        "description": "Ut esse condemor va usté muy cargadoo aute.",
        "color": "white",
        "price": 449,
        "imageFileName": "A_53.png",
        "screen": "6,5 inch Super AMOLED",
        "processor": "Exynos 1280 5nm",
        "ram": 6
    },
    {
        "name": "A 52",
        "manufacturer": "Samsung",
        "description": "Ullamco exercitation voluptate et.",
        "color": "purple",
        "price": 343,
        "imageFileName": "A_52.png",
        "screen": "6,5 inch Super AMOLED",
        "processor": "Snapdragon 720G",
        "ram": 6
    },
    {
        "name": "Redmi Note 10",
        "manufacturer": "Xiaomi",
        "description": "Apetecan magna duis quietooor nostrud ahorarr sit amet ad.",
        "color": "blue",
        "price": 235,
        "imageFileName": "Redmi_Note_10.png",
        "screen": "6,43 inch AMOLED",
        "processor": "Helio G95",
        "ram": 6
    },
    {
        "name": "iPhone 12",
        "manufacturer": "Apple",
        "description": "Benemeritaar a wan no te digo trigo por no llamarte Rodrigor fistro condemor ese que llega ese que llega torpedo.",
        "color": "product red",
        "price": 755,
        "imageFileName": "IPhone_12.png",
        "screen": "6,1 inch OLED",
        "processor": "A14 Bionic",
        "ram": 4
    },
    {
        "name": "A 22",
        "manufacturer": "Samsung",
        "description": "Diodenoo minim exercitation esse cillum condemor aliqua nisi exercitation.",
        "color": "white",
        "price": 199,
        "imageFileName": "A_22.png",
        "screen": "6,6 inch TFT",
        "processor": "Helio G80",
        "ram": 4
    },
    {
        "name": "Blade A71",
        "manufacturer": "ZTE",
        "description": "Enim qui ese que llega dolore voluptate aliqua aliquip te va a hasé pupitaa.",
        "color": "gray",
        "price": 99,
        "imageFileName": "Blade_A71.png",
        "screen": "6,52 inch IPS",
        "processor": "Spreadtrum SC9863A",
        "ram": 3
    },
]

const startSeeding = async () => {
    try {
        await Phone.deleteMany()
        console.log('Deleted previous data')
    }
    catch(error) {
        console.error(error.message)
    }
    try {
        await Phone.create(phones)
        console.log('Seed data inserted')
    }
    catch(error) {
        console.error(error.message)
    }  
}