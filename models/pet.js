module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define("Pet",{
        id:{
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull :false,
            validate: {
                notEmpty: true
            }
        },
        Nom:{
            type : DataTypes.STRING,
            allowNull :false,
            validate: {
                notEmpty: true
            }
        },
        Race:{
            type : DataTypes.STRING,
            allowNull :false,
            validate: {
                notEmpty: true
            }
        }, 
        Genre:{
            type : DataTypes.STRING,
            allowNull :false,
            validate: {
                notEmpty: true
            }
        },
        Age:{
            type : DataTypes.INTEGER,
            allowNull :false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Pet;
}