export type PageId = 'home' | 'vehicle' | 'about' | 'gallery' | 'contact' | 'book';

export interface VehicleVariant {
  id: string;
  name: string;
  badge: string;
  pricePlaceholder: string;
  acceleration: string;
  topSpeed: string;
  range: string;
  peakPower: string;
  driveTrain: string;
  features: string[];
}

export interface SpecificationCategory {
  category: string;
  items: {
    label: string;
    valuePlaceholder: string;
    unit?: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'exterior' | 'interior' | 'lifestyle' | 'video';
  image: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

export interface TestDriveFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  preferredDate: string;
  experienceCenter: string;
  comments: string;
}

export interface BookingFormData {
  selectedVariantId: string;
  selectedColor: string;
  city: string;
  experienceCenter: string;
  fullName: string;
  email: string;
  phone: string;
  pinCode: string;
  paymentMethod: 'token' | 'full';
  termsAccepted: boolean;
}

export interface ExperienceCenter {
  id: string;
  city: string;
  name: string;
  addressPlaceholder: string;
  phonePlaceholder: string;
  hoursPlaceholder: string;
}
