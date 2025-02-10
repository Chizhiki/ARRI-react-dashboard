import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import SubsidyCard from "./SubsidyCard";
import SubsidyDialog from "./SubsidyDialog";
import PropTypes from "prop-types";

const SubsidySelector = ({ currentSubsidy, subsidies, onSubsidyChange, sx }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const cardWidth = (sx && sx.width) || 300;

  const handleCardClick = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSelectSubsidy = (subsidy) => {
    onSubsidyChange(subsidy);
    setOpenDialog(false);
  };

  return (
    <>
      {/* Отображение основной карточки */}
      <SubsidyCard
        subsidy={currentSubsidy}
        onClick={handleCardClick}
        sx={{
          width: cardWidth,
          backgroundColor: colors.primary[400],
          ...sx,
        }}
      />
      {/* Всплывающее окно для выбора субсидии */}
      <SubsidyDialog
        open={openDialog}
        onClose={handleDialogClose}
        subsidies={subsidies}
        onSelectSubsidy={handleSelectSubsidy}
      />
    </>
  );
};

SubsidySelector.propTypes = {
  currentSubsidy: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    amount: PropTypes.number,
    contestType: PropTypes.string,
  }),
  subsidies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      amount: PropTypes.number,
      contestType: PropTypes.string,
    })
  ),
  onSubsidyChange: PropTypes.func.isRequired,
  sx: PropTypes.object,
};

export default SubsidySelector;
