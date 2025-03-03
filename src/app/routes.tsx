import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  MenuBook as PropertyBookIcon,
  Inventory as InventoryIcon,
  Security as SensitiveItemsIcon,
  SwapHoriz as TransfersIcon,
  Assignment as InventoriesIcon,
  Build as MaintenanceIcon,
  Description as ReportsIcon,
  Settings as SettingsIcon,
  AdminPanelSettings as AdminIcon,
} from '@mui/icons-material';

// Lazy load pages
const Dashboard = React.lazy(() => import('../pages/Dashboard/index'));
const PropertyBook = React.lazy(() => import('../pages/PropertyBook/index'));
const Inventories = React.lazy(() => import('../pages/Inventories/index'));
const TransfersMovement = React.lazy(() => import('../pages/TransfersMovement/index'));
const EquipmentReadiness = React.lazy(() => import('../pages/EquipmentReadiness/index'));
const Reports = React.lazy(() => import('../pages/Reports/index'));
const SensitiveItems = React.lazy(() => import('../pages/SensitiveItems/index'));

export const ROUTES = {
  // 1. Dashboard
  DASHBOARD: '/dashboard',
  
  // 2. Property Book
  PROPERTY_BOOK: '/property-book',
  HAND_RECEIPTS: '/property-book/hand-receipts',
  SUB_HAND_RECEIPTS: '/property-book/sub-hand-receipts',
  COMPONENT_HAND_RECEIPTS: '/property-book/component-hand-receipts',
  SHORTAGE_ANNEXES: '/property-book/shortage-annexes',
  
  // 3. Sensitive Items Management
  SENSITIVE_ITEMS: '/sensitive-items',
  SENSITIVE_INVENTORY: '/sensitive-items/inventory',
  SENSITIVE_DASHBOARD: '/sensitive-items/dashboard',
  SERIAL_VERIFICATION: '/sensitive-items/verification',
  MISSING_ITEM_RESPONSE: '/sensitive-items/missing',
  
  // 4. Transfers & Movement
  TRANSFERS: '/transfers',
  LATERAL_TRANSFERS: '/transfers/lateral',
  TURN_IN_PROCESS: '/transfers/turn-in',
  ISSUE_PROCESS: '/transfers/issue',
  TEMP_HAND_RECEIPTS: '/transfers/temporary',
  MAINTENANCE_TRANSFERS: '/transfers/maintenance',
  
  // 5. Inventories & Inspections
  INVENTORIES: '/inventories',
  INVENTORY_SCHEDULE: '/inventories/schedule',
  INVENTORY_EXECUTION: '/inventories/execution',
  CHANGE_OF_COMMAND: '/inventories/change-of-command',
  CSDP: '/inventories/csdp',
  
  // 6. Equipment Readiness
  EQUIPMENT_READINESS: '/equipment-readiness',
  READINESS_DASHBOARD: '/equipment-readiness/dashboard',
  MAINTENANCE_MANAGEMENT: '/equipment-readiness/maintenance',
  MISSION_IMPACT: '/equipment-readiness/mission-impact',
  OPERATOR_QUALIFICATIONS: '/equipment-readiness/qualifications',
  
  // 7. Reports & Documentation
  REPORTS: '/reports',
  STANDARD_FORMS: '/reports/forms',
  COMMAND_REPORTS: '/reports/command',
  FLIPL: '/reports/flipl',
  DOCUMENT_ARCHIVE: '/reports/archive',
  
  // 8. Admin & Settings
  ADMIN: '/admin',
  USER_MANAGEMENT: '/admin/users',
  UNIT_CONFIGURATION: '/admin/unit',
  SYSTEM_INTEGRATION: '/admin/integration',
  SECURITY_SETTINGS: '/admin/security',
  
  PROFILE: '/profile',
} as const;

export const NAV_ITEMS = [
  // 1. Dashboard
  {
    title: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: DashboardIcon,
    notificationCount: 3,
    description: 'Command-level accountability status and critical actions'
  },
  
  // 2. Property Book
  {
    title: 'Property Book',
    path: ROUTES.PROPERTY_BOOK,
    icon: PropertyBookIcon,
    description: 'Hand receipt management and property accountability chain',
    subItems: [
      { title: 'Hand Receipts', path: ROUTES.HAND_RECEIPTS },
      { title: 'Sub-Hand Receipts', path: ROUTES.SUB_HAND_RECEIPTS },
      { title: 'Component Hand Receipts', path: ROUTES.COMPONENT_HAND_RECEIPTS },
      { title: 'Shortage Annexes', path: ROUTES.SHORTAGE_ANNEXES }
    ]
  },
  
  // 3. Sensitive Items Management
  {
    title: 'Sensitive Items',
    path: ROUTES.SENSITIVE_ITEMS,
    icon: SensitiveItemsIcon,
    description: 'Dedicated tracking of high-value, sensitive equipment',
    notificationCount: 1,
    subItems: [
      { title: 'Daily/Weekly Inventory', path: ROUTES.SENSITIVE_INVENTORY },
      { title: 'Sensitive Item Dashboard', path: ROUTES.SENSITIVE_DASHBOARD },
      { title: 'Serial Number Verification', path: ROUTES.SERIAL_VERIFICATION },
      { title: 'Missing Item Response', path: ROUTES.MISSING_ITEM_RESPONSE }
    ]
  },
  
  // 4. Transfers & Movement
  {
    title: 'Transfers & Movement',
    path: ROUTES.TRANSFERS,
    icon: TransfersIcon,
    description: 'Equipment transfer documentation and processing',
    notificationCount: 2,
    subItems: [
      { title: 'Lateral Transfers', path: ROUTES.LATERAL_TRANSFERS },
      { title: 'Turn-In Process', path: ROUTES.TURN_IN_PROCESS },
      { title: 'Issue Process', path: ROUTES.ISSUE_PROCESS },
      { title: 'Temporary Hand Receipts', path: ROUTES.TEMP_HAND_RECEIPTS },
      { title: 'Maintenance Transfers', path: ROUTES.MAINTENANCE_TRANSFERS }
    ]
  },
  
  // 5. Inventories & Inspections
  {
    title: 'Inventories & Inspections',
    path: ROUTES.INVENTORIES,
    icon: InventoriesIcon,
    description: 'Planning and conducting required inventories',
    subItems: [
      { title: 'Inventory Schedule', path: ROUTES.INVENTORY_SCHEDULE },
      { title: 'Inventory Execution', path: ROUTES.INVENTORY_EXECUTION },
      { title: 'Change of Command', path: ROUTES.CHANGE_OF_COMMAND },
      { title: 'CSDP Integration', path: ROUTES.CSDP }
    ]
  },
  
  // 6. Equipment Readiness
  {
    title: 'Equipment Readiness',
    path: ROUTES.EQUIPMENT_READINESS,
    icon: MaintenanceIcon,
    description: 'Maintenance status and mission capability',
    notificationCount: 8,
    subItems: [
      { title: 'Readiness Dashboard', path: ROUTES.READINESS_DASHBOARD },
      { title: 'Maintenance Management', path: ROUTES.MAINTENANCE_MANAGEMENT },
      { title: 'Mission Impact Analysis', path: ROUTES.MISSION_IMPACT },
      { title: 'Operator Qualifications', path: ROUTES.OPERATOR_QUALIFICATIONS }
    ]
  },
  
  // 7. Reports & Documentation
  {
    title: 'Reports & Documentation',
    path: ROUTES.REPORTS,
    icon: ReportsIcon,
    description: 'Generate required military property documentation',
    subItems: [
      { title: 'Standard Army Forms', path: ROUTES.STANDARD_FORMS },
      { title: 'Command Reports', path: ROUTES.COMMAND_REPORTS },
      { title: 'FLIPL Tools', path: ROUTES.FLIPL },
      { title: 'Document Archive', path: ROUTES.DOCUMENT_ARCHIVE }
    ]
  },
  
  // 8. Admin & Settings
  {
    title: 'Admin & Settings',
    path: ROUTES.ADMIN,
    icon: AdminIcon,
    description: 'System configuration and unit management',
    isAdminSection: true,
    subItems: [
      { title: 'User Management', path: ROUTES.USER_MANAGEMENT },
      { title: 'Unit Configuration', path: ROUTES.UNIT_CONFIGURATION },
      { title: 'System Integration', path: ROUTES.SYSTEM_INTEGRATION },
      { title: 'Security Settings', path: ROUTES.SECURITY_SETTINGS }
    ]
  }
];

export const SYSTEM_STATUS = {
  connectionStatus: 'connected' as 'connected' | 'offline',
  lastSync: '25FEB2025 0842',
  version: 'HandReceipt Defense v1.4.2'
};

const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
        
        {/* Main routes */}
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        
        {/* Property Book routes */}
        <Route path={ROUTES.PROPERTY_BOOK} element={<PropertyBook />} />
        <Route path={ROUTES.HAND_RECEIPTS} element={<PropertyBook />} />
        <Route path={ROUTES.SUB_HAND_RECEIPTS} element={<PropertyBook />} />
        <Route path={ROUTES.COMPONENT_HAND_RECEIPTS} element={<PropertyBook />} />
        <Route path={ROUTES.SHORTAGE_ANNEXES} element={<PropertyBook />} />
        
        {/* Sensitive Items routes */}
        <Route path={ROUTES.SENSITIVE_ITEMS} element={<SensitiveItems />} />
        <Route path={ROUTES.SENSITIVE_INVENTORY} element={<SensitiveItems />} />
        <Route path={ROUTES.SENSITIVE_DASHBOARD} element={<SensitiveItems />} />
        <Route path={ROUTES.SERIAL_VERIFICATION} element={<SensitiveItems />} />
        <Route path={ROUTES.MISSING_ITEM_RESPONSE} element={<SensitiveItems />} />
        
        {/* Transfers routes */}
        <Route path={ROUTES.TRANSFERS} element={<TransfersMovement />} />
        <Route path={ROUTES.LATERAL_TRANSFERS} element={<TransfersMovement />} />
        <Route path={ROUTES.TURN_IN_PROCESS} element={<TransfersMovement />} />
        <Route path={ROUTES.ISSUE_PROCESS} element={<TransfersMovement />} />
        <Route path={ROUTES.TEMP_HAND_RECEIPTS} element={<TransfersMovement />} />
        <Route path={ROUTES.MAINTENANCE_TRANSFERS} element={<TransfersMovement />} />
        
        {/* Inventories routes */}
        <Route path={ROUTES.INVENTORIES} element={<Inventories />} />
        <Route path={ROUTES.INVENTORY_SCHEDULE} element={<Inventories />} />
        <Route path={ROUTES.INVENTORY_EXECUTION} element={<Inventories />} />
        <Route path={ROUTES.CHANGE_OF_COMMAND} element={<Inventories />} />
        <Route path={ROUTES.CSDP} element={<Inventories />} />
        
        {/* Equipment Readiness routes */}
        <Route path={ROUTES.EQUIPMENT_READINESS} element={<EquipmentReadiness />} />
        <Route path={ROUTES.READINESS_DASHBOARD} element={<EquipmentReadiness />} />
        <Route path={ROUTES.MAINTENANCE_MANAGEMENT} element={<EquipmentReadiness />} />
        <Route path={ROUTES.MISSION_IMPACT} element={<EquipmentReadiness />} />
        <Route path={ROUTES.OPERATOR_QUALIFICATIONS} element={<EquipmentReadiness />} />
        
        {/* Reports routes */}
        <Route path={ROUTES.REPORTS} element={<Reports />} />
        <Route path={ROUTES.STANDARD_FORMS} element={<Reports />} />
        <Route path={ROUTES.COMMAND_REPORTS} element={<Reports />} />
        <Route path={ROUTES.FLIPL} element={<Reports />} />
        <Route path={ROUTES.DOCUMENT_ARCHIVE} element={<Reports />} />
        
        {/* Admin routes - temporarily redirect to Dashboard since pages were deleted */}
        <Route path={ROUTES.ADMIN} element={<Dashboard />} />
        <Route path={ROUTES.USER_MANAGEMENT} element={<Dashboard />} />
        <Route path={ROUTES.UNIT_CONFIGURATION} element={<Dashboard />} />
        <Route path={ROUTES.SYSTEM_INTEGRATION} element={<Dashboard />} />
        <Route path={ROUTES.SECURITY_SETTINGS} element={<Dashboard />} />
        
        {/* User Profile */}
        <Route path={ROUTES.PROFILE} element={<Dashboard />} />
        
        {/* Handle 404 */}
        <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
