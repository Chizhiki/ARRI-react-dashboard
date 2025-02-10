import React from "react";
import { Box, Typography } from "@mui/material";
import SubsidyCard from "./SubsidyCard";
import PropTypes from "prop-types";

const SubsidyList = ({ subsidies, onSelectSubsidy, hideLabel }) => {
  if (!subsidies.length) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="body1">Нет субсидий</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 2, maxHeight: "60vh", overflowY: "auto" }}>
      {subsidies.map((subsidy) => (
        <Box
          key={subsidy.id}
          onClick={() => onSelectSubsidy(subsidy)}
          sx={{
            mb: 1,
            cursor: "pointer",
            "&:last-child": { mb: 0 },
          }}
        >
          <SubsidyCard subsidy={subsidy} hideLabel sx={{ boxShadow: "none" }} />
        </Box>
      ))}
    </Box>
  );
};

SubsidyList.propTypes = {
  subsidies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      amount: PropTypes.number,
      contestType: PropTypes.string,
    })
  ).isRequired,
  onSelectSubsidy: PropTypes.func.isRequired,
  hideLabel: PropTypes.bool,
};

export default SubsidyList;
