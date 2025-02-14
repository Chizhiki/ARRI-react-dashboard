import React from "react";
import { Box, Typography, Divider, useTheme} from '@mui/material';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { tokens } from "../../theme";

const AllocatedFundsPanel = ({ amount, sx }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        p: 2,
        textAlign: 'center',
        ...sx,
      }}
    >
       <Box
        sx={{
          width: 64,
          height: 64,
          background: theme.gradients.orange,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1, 
          mx: 'auto',     
        }}
      >
        <PriceCheckIcon
          sx={{
            fontSize: 36,
            color: 'white',
          }}
        />
      </Box>

      <Typography variant="h6" fontWeight="bold" marginTop={2}>
        Баланс
      </Typography>

      <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
        Выделено средств
      </Typography>

      <Divider sx={{ mt: 1, mb: 1.5 }} />

      <Typography variant="h4" fontWeight="bold">
        {amount.toLocaleString()} ₽
      </Typography>
    </Box>
  );
};

export default AllocatedFundsPanel;
