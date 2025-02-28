import { PropertyItem } from './types';

// Mock data for property book items
export const mockPropertyItems: PropertyItem[] = [
  { id: 'PBO-001', lin: 'L12345', nsn: '123456789', nomenclature: 'M4A1 Carbine', serialNumber: 'M4-78921', qtyAuth: 30, qtyOnHand: 28, location: 'Arms Room', handReceiptHolder: '1LT CHEN', status: 'Serviceable', lastVerified: '2023-12-15', category: 'weapons', subCategory: 'small-arms', value: 1200, isSensitive: true },
  { id: 'PBO-002', lin: 'L54321', nsn: '987654321', nomenclature: 'JLTV', serialNumber: 'J-12345', qtyAuth: 4, qtyOnHand: 4, location: 'Motor Pool', handReceiptHolder: 'CPT RODRIGUEZ', status: 'Serviceable', lastVerified: '2023-11-20', category: 'vehicles', subCategory: 'tactical', value: 256000 },
  { id: 'PBO-003', lin: 'L67890', nsn: '456789123', nomenclature: 'SINCGARS Radio', serialNumber: 'SR-54321', qtyAuth: 15, qtyOnHand: 12, location: 'Comms Room', handReceiptHolder: '1SG MARTINEZ', status: 'Maintenance', lastVerified: '2023-10-05', category: 'communications', subCategory: 'radios', value: 32000, isSensitive: true },
  { id: 'PBO-004', lin: 'L13579', nsn: '789123456', nomenclature: 'M240B', serialNumber: 'M240-12345', qtyAuth: 8, qtyOnHand: 8, location: 'Arms Room', handReceiptHolder: '1LT CHEN', status: 'Serviceable', lastVerified: '2023-12-15', category: 'weapons', subCategory: 'crew-served', value: 8500, isSensitive: true },
  { id: 'PBO-005', lin: 'L24680', nsn: '321456789', nomenclature: 'HMMWV', serialNumber: 'HQ-237', qtyAuth: 6, qtyOnHand: 5, location: 'Motor Pool', handReceiptHolder: 'SFC TAYLOR', status: 'Maintenance', lastVerified: '2023-09-30', category: 'vehicles', subCategory: 'tactical', value: 120000 },
  { id: 'PBO-006', lin: 'L97531', nsn: '654321987', nomenclature: 'PVS-14 NVG', serialNumber: 'PVS-7890', qtyAuth: 45, qtyOnHand: 40, location: 'Supply Room', handReceiptHolder: 'SSG WILSON', status: 'Serviceable', lastVerified: '2023-12-01', category: 'optics', subCategory: 'night-vision', value: 3500, isSensitive: true },
  { id: 'PBO-007', lin: 'L86420', nsn: '159753456', nomenclature: 'M249 SAW', serialNumber: 'M249-5432', qtyAuth: 12, qtyOnHand: 10, location: 'Arms Room', handReceiptHolder: '1LT CHEN', status: 'Serviceable', lastVerified: '2023-12-15', category: 'weapons', subCategory: 'crew-served', value: 6800, isSensitive: true },
  { id: 'PBO-008', lin: 'L53197', nsn: '753159456', nomenclature: 'Generator 5kW', serialNumber: 'GEN-78901', qtyAuth: 8, qtyOnHand: 8, location: 'Supply Room', handReceiptHolder: 'SFC TAYLOR', status: 'Serviceable', lastVerified: '2023-11-10', category: 'tools', subCategory: 'power', value: 15000 },
  { id: 'PBO-009', lin: 'L67842', nsn: '951357456', nomenclature: 'ACOG Sight', serialNumber: 'ACOG-4321', qtyAuth: 25, qtyOnHand: 20, location: 'Supply Room', handReceiptHolder: 'SSG WILSON', status: 'Shortage', lastVerified: '2023-12-05', category: 'optics', subCategory: 'day-optics', value: 1200, isSensitive: true },
  { id: 'PBO-010', lin: 'L31975', nsn: '357159852', nomenclature: 'M9 Pistol', serialNumber: 'M9-23456', qtyAuth: 15, qtyOnHand: 14, location: 'Arms Room', handReceiptHolder: '1LT CHEN', status: 'Unserviceable', lastVerified: '2023-11-25', category: 'weapons', subCategory: 'small-arms', value: 600, isSensitive: true },
  { id: 'PBO-011', lin: 'L75312', nsn: '159357852', nomenclature: 'DAGR GPS', serialNumber: 'DAGR-12345', qtyAuth: 10, qtyOnHand: 7, location: 'Comms Room', handReceiptHolder: 'SSG THOMPSON', status: 'Shortage', lastVerified: '2023-10-15', category: 'communications', subCategory: 'navigation', value: 2200, isSensitive: true },
  { id: 'PBO-012', lin: 'L95123', nsn: '753951862', nomenclature: 'Thermal Scope', serialNumber: 'TS-54321', qtyAuth: 8, qtyOnHand: 7, location: 'Supply Room', handReceiptHolder: 'SFC TAYLOR', status: 'Unserviceable', lastVerified: '2023-09-20', category: 'optics', subCategory: 'thermal', value: 9500, isSensitive: true }
]; 