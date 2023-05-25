import { NextFunction, Request, Response } from "express";
import OrdersService, { IOrder } from "../services/OrdersService";

export default class OrdersController {
  static async getOrderById(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;

    const { message, status, order } = await OrdersService.getOrderById(id);

    return res.status(status).json({ order, message });
  }

  static async getLatestOrders(
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    const { message, status, foundOrders } =
      await OrdersService.getLatestOrders();

    return res.status(status).json({ foundOrders, message });
  }

  static async postOrder(req: Request, res: Response, _next: NextFunction) {
    const randomFloatTime = getRandomFloatNumber(20, 80);
    const newOrder: IOrder = { deliveryTime: randomFloatTime, ...req.body };
    const { message, status, createdOrder } = await OrdersService.postOrder(
      newOrder
    );

    return res.status(status).json({ createdOrder, message });
  }
}

function getRandomFloatNumber(min: number, max: number): number {
  const decimalPlaces = 2;
  const randomValue = Math.random() * (max - min) + min;
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(randomValue * factor) / factor;
}
