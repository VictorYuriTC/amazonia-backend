import Orders from "../models/Orders";

export interface INewOrder {
  startingPoint: string;
  objectPoint: string;
  destinationPoint: string;
}

export interface IOrder extends INewOrder {
  id: number;
  deliveryTime?: number;
}

export default class OrdersService implements IOrder {
  public id: number;
  public startingPoint: string;
  public objectPoint: string;
  public destinationPoint: string;
  public deliveryTime?: number;

  constructor(
    id: number,
    startingPoint: string,
    objectPoint: string,
    destinationPoint: string,
    deliveryTime?: number
  ) {
    this.id = id;
    this.startingPoint = startingPoint;
    this.objectPoint = objectPoint;
    this.destinationPoint = destinationPoint;
    this.deliveryTime = deliveryTime;
  }

  static async getOrderById(id: string | number) {
    const order = await Orders.findOne({ where: { id } });

    if (!order) {
      return { message: "No order found", status: 401 };
    }

    return { message: "Order found successfully", status: 200, order };
  }

  static async getLatestOrders() {
    const foundOrders = await Orders.findAll({
      limit: 10,
    });

    if (!foundOrders) {
      return { message: "No orders found", status: 401 };
    }

    return {
      message: "Latest orders found successfully",
      status: 200,
      foundOrders,
    };
  }

  static async postOrder(newOrder: INewOrder) {
    const createdOrder = await Orders.create({
      ...newOrder,
    });

    return {
      message: "Order created successfully",
      status: 200,
      createdOrder,
    };
  }
}
