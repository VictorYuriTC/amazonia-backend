import { Router } from "express";
import OrdersController from "../controllers/OrdersController";

const OrdersRouter = Router();

OrdersRouter.post("/", OrdersController.postOrder);

OrdersRouter.get("/latest", OrdersController.getLatestOrders);

OrdersRouter.get("/:id", OrdersController.getOrderById);

export default OrdersRouter;
