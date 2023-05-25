import { Model, INTEGER, STRING, FLOAT } from "sequelize";
import sequelize from ".";

class Orders extends Model {
  declare id: number;
  declare startingPoint: string;
  declare objectPoint: string;
  declare destinationPoint: string;
}

Orders.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    startingPoint: {
      type: STRING,
    },

    objectPoint: {
      type: STRING,
    },

    destinationPoint: {
      type: STRING,
    },

    deliveryTime: {
      type: FLOAT,
    },
  },

  {
    underscored: true,
    sequelize,
    modelName: "order",
    timestamps: false,
  }
);

export default Orders;
