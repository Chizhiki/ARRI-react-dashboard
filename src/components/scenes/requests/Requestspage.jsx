import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  Breadcrumbs,
  useTheme, 
  Divider
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { tokens } from "../../../theme";
import subsidiesData from "../../../data/subsidies.json";
import amountsData from "../../../data/amounts.json";
import SubsidySelector from "../../local/SubsidySelector";
import BalancePanel from "../../local/BalancePanel";
import AllocatedFundsPanel from "../../local/AllocatedFundsPanel";
import RequestAllocationList from "../../local/RequestAllocationList";

const Requestspage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [subsidies, setSubsidies] = useState([]);
  const [selectedSubsidy, setSelectedSubsidy] = useState(null);
  const [accountBalance, setAccountBalance] = useState(0);
  const [allocatedFunds, setAllocatedFunds] = useState(0);

  useEffect(() => {
    setSubsidies(subsidiesData);
    if (subsidiesData.length) setSelectedSubsidy(subsidiesData[0]);
  }, []);

  useEffect(() => {
    if (selectedSubsidy) {
      fetchAmounts(selectedSubsidy.id);
    }
  }, [selectedSubsidy]);

  const fetchAmounts = (subsidyId) => {
    const found = amountsData.find(item => item.subsidyId === subsidyId);
    if (found) {
      setAccountBalance(found.accountBalance);
      setAllocatedFunds(found.allocatedFunds);
    } else {
      setAccountBalance(0);
      setAllocatedFunds(0);
    }
  };

  const handleSubsidyChange = (newSubsidy) => {
    setSelectedSubsidy(newSubsidy);
  };

  const basePanelStyle = {
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    p: 2,
  };

  const compsPanelStyle = {
    ...basePanelStyle,
    background: 0,
    border: 1,
    borderColor: "rgba(88, 88, 88, 0.2)"
  };

  const fancyPanelStyle = {
    ...basePanelStyle,
    background: theme.gradients.orange
  };

  const flexColumnContainer = {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  };

  return (
    <Box sx={{ marginLeft: 2, padding: 2 }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        sx={{ mb: 1 }}
      >
        <Typography variant="h5" color="text.secondary">
          Главная
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Заявки на субсидии
        </Typography>
      </Breadcrumbs>

      <Stack direction="column" spacing={3} sx={{ mt: 2 }}>
        <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
          <Box sx={{ ...flexColumnContainer, flex: 4 }}>
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <SubsidySelector
                sx={{ flex: "2 1 0", minWidth: 400, height: 200, ...fancyPanelStyle }}
                currentSubsidy={selectedSubsidy}
                subsidies={subsidies}
                onSubsidyChange={handleSubsidyChange}
              />

              <BalancePanel amount={accountBalance} sx={{ ...compsPanelStyle, width: 200, height: 200 }} />
              
              <AllocatedFundsPanel amount={allocatedFunds} sx={{ ...compsPanelStyle, width: 200, height: 200 }} />
            </Box>
            
            <Box sx={{ ...compsPanelStyle, minWidth: 150, height: 150 }}>
              Панель 5
            </Box>
          </Box>
          
          <Box sx={{ ...compsPanelStyle, flex: "2 1 0", minWidth: 150 }}>
            <RequestAllocationList/>
          </Box>
        </Stack>
        
        <Box sx={{ ...flexColumnContainer, flex: 3 }}>
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Box sx={{ ...compsPanelStyle, flex: "2 1 0", minWidth: 150 }}>
              Панель 6
            </Box>
            

            <Box sx={{ ...flexColumnContainer, flex: 3 }}>
              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                <Box sx={{ ...compsPanelStyle, flex: "1 1 0", minWidth: 150, height: 400 }}>
                  Панель 7
                </Box>
                
                <Box sx={{ ...compsPanelStyle, flex: "1 1 0", minWidth: 150, height: 400 }}>
                  Панель 8
                </Box>
              </Box>
              
              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                <Box sx={{ ...compsPanelStyle, flex: "1 1 0", minWidth: 150, height: 400 }}>
                  Панель 9
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        
      </Stack>
    </Box>
  );
};

export default Requestspage;
