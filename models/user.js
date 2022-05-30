module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User",{
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
        Prénom:{
            type : DataTypes.STRING,
            allowNull :false,
            validate: {
                notEmpty: true
            }
        }, 
        Mail:{
            type : DataTypes.STRING,
            allowNull :false,
            validate: {
                notEmpty: true
            }
        },
        Téléphone:{
            type : DataTypes.INTEGER,
            allowNull :false,
            validate: {
                notEmpty: true
            }
        },
        User_name:{
            type : DataTypes.STRING,
            allowNull :false,
            validate: {
                notEmpty: true
            }
        },
        Mot_de_passe:{
            type : DataTypes.STRING,
            allowNull :false,
            validate: {
                notEmpty: true
            }
        },
        Nom_statut:{
            type : DataTypes.STRING,
            allowNull :true,
        }
    });
    return User;
}