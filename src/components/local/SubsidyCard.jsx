import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PropTypes from "prop-types";

const SubsidyCard = ({ subsidy, onClick, hideLabel, sx }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: onClick ? "pointer" : "default",
        color: "rgb(249, 249, 249)",
        borderRadius: "12px",
        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
        backgroundColor: "inherit",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        ":hover": onClick ? { transform: "scale(1.01)" } : {},
        ...sx,
      }}
    >
    {subsidy && (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            p: 0.1,
          }}
        >
        <Typography variant="h5" sx={{ fontWeight: 500, ml: 1 }}>
          {subsidy.name}
        </Typography>  
        <Typography variant="h5" sx={{ fontWeight: 500, ml: 1}}>
          №{subsidy.code}
        </Typography>
        </Box>

        <Divider
          sx={{
            mx: 1,
            mt: 1,
            //backgroundColor: "rgba(255, 255, 255, 0.46)",
          }}
        />
      </>
    )}

      <Box sx={{ px: 1, py: 2 }}>
        {subsidy ? (
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <EventIcon fontSize="medium" />
              <Typography variant="h6" sx={{ fontWeight: 500, mb: -0.3 }}>
                {subsidy.startDate} – {subsidy.endDate}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <CurrencyRubleIcon fontSize="medium" />
              <Typography variant="h6" sx={{ fontWeight: 500, mb: -0.3 }}>
                {subsidy.amount}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "right", gap: 2 }}>
              <ReceiptLongIcon fontSize="medium" />
              <Typography variant="h6" sx={{ fontWeight: 500, mb: -0.3 }}>
                {subsidy.contestType}
              </Typography>
            </Box>
          </>
        ) : (
          <Typography variant="h6" sx={{ fontWeight: 600, textAlign: "center", py: 2 }}>
            Выберите субсидию
          </Typography>
        )}
      </Box>
    </Box>
  );
};

SubsidyCard.propTypes = {
  subsidy: PropTypes.shape({
    id: PropTypes.number,
    code: PropTypes.string,
    name: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    amount: PropTypes.number,
    contestType: PropTypes.string,
  }),
  onClick: PropTypes.func,
  hideLabel: PropTypes.bool,
  sx: PropTypes.object,
};

export default SubsidyCard;
