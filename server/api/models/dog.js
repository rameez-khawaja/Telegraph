const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Dog {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.author = data.author
        this.content = data.content
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const dogsData = await db.collection('dogs').find().toArray()
                // const dogs = dogsData.map(d => new Dog({ ...d, id: d._id }))
                resolve(dogsData);
            } catch (err) {
                console.log(err);
                reject("Error retrieving dogs")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let dogData = await db.collection('dogs').find({ _id: ObjectId(id) }).toArray()
                let dog = new Dog({...dogData[0], id: dogData[0]._id});
                resolve (dogData);
            } catch (err) {
                reject('Dog not found');
            }
        });
    }

    static create(title, author, content){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let dogData = await db.collection('dogs').insertOne({ title, author, content })
                let newDog = new Dog(dogData.ops[0]);
                resolve (newDog);
            } catch (err) {
                reject('Error creating dog');
            }
        });
    }
}

module.exports = Dog;
