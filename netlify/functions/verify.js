export default async (req) => {
  const params = req.queryStringParameters || {};
  const order_id = params.order_id;

  if (!order_id) {
    return {
      statusCode: 400,
      body: "Order ID missing"
    };
  }

  const paidOrders = ["demo_paid_123"];

  if (paidOrders.includes(order_id)) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }

  return {
    statusCode: 403,
    body: JSON.stringify({ success: false })
  };
};
