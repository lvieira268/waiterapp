import { Request, Response } from "express";
import { Order } from "../../models/order";

export async function listOrders(req: Request, res: Response) {
	const orders = await Order.find()
		.sort({
			createdAt: -1,
		})
		.populate("products.product");

	res.json(orders);
}
