

export const checkout = {
    name: 'checkout',
    title: 'Checkout',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Customer Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Shipping Address',
        type: 'string',
      },
      {
        name: 'orderItems',
        title: 'Order Items',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
      },
    ],
  }
  