
// schemas/order.js
export const order =  {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'phone', title: 'Phone', type: 'string' },
      { name: 'email', title: 'Email', type: 'string' },
      { name: 'address', title: 'Address', type: 'object', fields: [
          { name: 'line1', title: 'Line 1', type: 'string' },
          { name: 'line2', title: 'Line 2', type: 'string' },
          { name: 'city', title: 'City', type: 'string' },
          { name: 'state', title: 'State', type: 'string' },
          { name: 'postalCode', title: 'Postal Code', type: 'string' },
          { name: 'country', title: 'Country', type: 'string' }
      ]},
      { name: 'cartItems', title: 'CartItems', type: 'array', of: [{ type: 'object', fields: [
          { name: 'name', type: 'string' },
          { name: 'price', type: 'number' },
          { name: 'quantity', type: 'number' }
      ]}]},
      { name: 'totalPrice', title: 'Total Price', type: 'number' },
      { name: 'shippingAddressType', title: 'Shipping Address Type', type: 'string' },
    ]
  };
  