const router = require('express').Router();

let cars = [
    {id:1, model: "BMW"},
    {id:2, model:"Audi"},
    {id:3, model:"Skoda"},
    {id:4, model: "KIA"}
];

let currentCarId = 4;

router.get("/", (req,res) => {
    return res.send({data: cars})
});

//GET cars/id
router.get("/:id", (req,res) =>{
    //req.params.id returnerer en string - derfor parses det til et tal nedenfor,
    // så vi kan bruge det i id-forespørgslen på car
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({data: car})
});

//Post  /cars
router.post("/", (req,res) => {
    const newCar = req.body;
    //her skal id tilføjes
    newCar.id = ++currentCarId;
    cars.push(newCar);
    return res.send({data: cars})
});
//const car = {"horsepower": 40};
//const moreCarInfo = {"brand": "Toyota"};
//console.log({ ...car, ...moreCarInfo});

router.patch("/:id", (req,res) => {
    cars = cars.map(car => {
        if(car.id === Number(req.params.id)){
            return { ...car, ...req.body, id: car.id};
        }
        return car;
    });
    return res.send({data: cars})
});

router.delete("/:id", (req,res) =>{
    cars = cars.filter(car => car.id !== Number(req.params.id));
    return res.send({data: cars})
});

module.exports = router;
