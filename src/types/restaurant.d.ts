type MenuItem = {
  name: string;
  price: number;
  _id: string;
};

export type Restaurant = {
  _id: string;
  user: string;
  name: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  __v: string;
};
