import React from 'react';
import {
  Box,
  Card,
  Typography,
  Button,
  styled,
} from '@mui/material';
import { PersonnelOverviewProps } from '../types';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
}));

const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  fontWeight: 500,
}));

const StatValue = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'status',
})<{ status?: 'success' | 'warning' | 'error' }>(({ theme, status }) => ({
  fontSize: '1rem',
  fontWeight: 600,
  color: status === 'success' ? theme.palette.success.main :
         status === 'warning' ? theme.palette.warning.main :
         status === 'error' ? theme.palette.error.main :
         theme.palette.text.primary,
}));

export const PersonnelOverview: React.FC<PersonnelOverviewProps> = ({ stats }) => {
  return (
    <StyledCard>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">Personnel Overview</Typography>
        <Button
          color="primary"
          sx={{ textTransform: 'none' }}
        >
          View All
        </Button>
      </Box>

      <StatItem>
        <StatLabel>Total Personnel</StatLabel>
        <StatValue>{stats.totalPersonnel}</StatValue>
      </StatItem>

      <StatItem>
        <StatLabel>Fully Equipped</StatLabel>
        <StatValue status="success">{stats.fullyEquipped}</StatValue>
      </StatItem>

      <StatItem>
        <StatLabel>Partially Equipped</StatLabel>
        <StatValue status="warning">{stats.partiallyEquipped}</StatValue>
      </StatItem>

      <StatItem>
        <StatLabel>Overdue Items</StatLabel>
        <StatValue status="error">{stats.overdueItems}</StatValue>
      </StatItem>
    </StyledCard>
  );
}; 