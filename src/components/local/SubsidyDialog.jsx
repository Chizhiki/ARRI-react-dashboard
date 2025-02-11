import React, { useState } from "react";
import { Dialog, DialogContent, Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import SubsidyList from "./SubsidyList";
import PropTypes from "prop-types";

const SubsidyDialog = ({ open, onClose, subsidies, onSelectSubsidy }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubsidies = subsidies.filter((subsidy) =>
    subsidy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClose = () => {
    setSearchQuery("");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          backgroundColor: colors.orange[500],
          borderRadius: "12px",
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
        },
      }}
    >
      <DialogContent>
        <Box sx={{ px: 2, py: 1 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Поиск субсидии"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1 }} /> }}
            fullWidth
          />
        </Box>
        <SubsidyList
          subsidies={filteredSubsidies}
          onSelectSubsidy={onSelectSubsidy}
          hideLabel={true}
        />
      </DialogContent>
    </Dialog>
  );
};

SubsidyDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  subsidies: PropTypes.array.isRequired,
  onSelectSubsidy: PropTypes.func.isRequired,
};

export default SubsidyDialog;
