import e from "express";
import { DataTypes, Sequelize } from "sequelize";

var conn;
(async function() {
    if(!conn) {
        try {
            conn = new Sequelize("dbName", null, null, {
                dialect: "sqlite",
                storage: "database/database.sqlite"
            });

            try {
                await conn.sync({force: true});
                console.log("Created the tables succesfully");
            } catch (error) {
                console.log("There was a problem with connection\n" + error);
            }
        } catch (error) {
            console.log("There was a problem with connection.\m" + error);
        }
    }
})();

export const Notes = conn.define("Notes", {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: DataTypes.STRING
});
