import {Request, Response} from "express";
const MongoClient = require('mongodb').MongoClient;

export function createCalendar(req: Request, res: Response): any {

    //https://www.w3schools.com/nodejs/nodejs_mongodb_createcollection.asp

    let url = "mongodb://weny.cz:27017/";
    MongoClient.connect(url, (err, db)  => {
        if (err) throw err;
        let dbo = db.db("vimkde");
        let myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("calendars").insertOne(myobj, function(err, response) {
            if (err){
                return res.json({status: "error", message: err});
            }
            console.log("1 document inserted");
            db.close();
            return res.json({status: "success", message: response});
        });
    });

}
