const yesterdayDate = () => {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
}

const products = [
    {
        id: 1,
        name: "white nice chair",
        description: "a nice chair you can sit on, this chair is from Italy and it is simply amazing",
        price: 100,
        creationDate: new Date()
    },
    {
        id: 2,
        name: "black vintage table",
        description: "a beautiful vintage table",
        price: 3000,
        creationDate: yesterdayDate
    },
    {
        id: 3,
        name: "teddy bear",
        description: "cute teddy bear for children",
        price: 30,
        creationDate: new Date()
    },
    {
        id: 4,
        name: "lamp",
        description: "stylish living room lamp",
        price: 20,
        creationDate: new Date()
    },
    {
        id: 5,
        name: "moka pot",
        description: "quality moka pot coffee maker",
        price: 26,
        creationDate: new Date()
    },
    {
        id: 6,
        name: "wine",
        description: "red wine from France",
        price: 22,
        creationDate: yesterdayDate
    },
]

export default products