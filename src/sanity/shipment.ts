

export const shipment = {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      { name: 'trackingNumber', title: 'Tracking Number', type: 'string' },
      { name: 'carrier', title: 'Carrier', type: 'string' },
      { name: 'status', title: 'Status', type: 'string' },
      { name: 'estimatedDelivery', title: 'Estimated Delivery', type: 'datetime' },
    ],
  };
  