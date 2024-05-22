export interface SHIPMENT {
  provider: string;
  CurrentStatus: {
    state: SHIPMENT_CURRENT_STATUS;
    timestamp: string;
  };
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: {
    state: TRANSIT_EVENTS_STATUS;
    timestamp: string;
    hub?: string;
  }[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: {
    dayDate: string;
    dayName: string;
  }[];
}

export type SHIPMENT_CURRENT_STATUS =
  | 'DELIVERED'
  | 'CANCELLED'
  | 'NOT_YET_SHIPPED';

export type TRANSIT_EVENTS_STATUS =
  | 'TICKET_CREATED'
  | 'PACKAGE_RECEIVED'
  | 'IN_TRANSIT'
  | 'DELIVERY_FAILED'
  | 'NOT_YET_SHIPPED'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'AVAILABLE_FOR_PICKUP'
  | 'WAITING_FOR_CUSTOMER_ACTION'
  | 'CANCELLED';
