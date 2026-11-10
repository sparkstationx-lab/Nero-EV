export type PageId = 'home' | 'vehicle' | 'about' | 'gallery' | 'contact' | 'book' | 'emi';

export interface VehicleVariant {
  id: string;
  name: string;
  badge: string;
  priceFormatted: string;
  priceRaw: number;
  priceLabelNote: string;
  range: string;
  chargingTime: string;
  topSpeed: string;
  seatingCapacity: number;
  brakingSystem: string;
  features: string[];
}

export interface SpecificationCategory {
  category: string;
  items: {
    label: string;
    value: string;
    note?: string;
    isDiscrepancy?: boolean;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'exterior' | 'interior' | 'lifestyle';
  image: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

export interface TestDriveFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  preferredDate: string;
  comments?: string;
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  state: string;
  city: string;
  preferredColor: string;
}

export interface EmiCalculationResult {
  monthlyEmi: number;
  totalInterest: number;
  totalPayment: number;
  principalAmount: number;
}
