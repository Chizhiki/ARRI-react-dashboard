import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  Divider,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { tokens } from "../../theme";

const RequestAllocationList = ({ sx }) => {
  const theme = useTheme();
  // Для демонстрации предполагаем, что в tokens у нас есть палитра цветов,
  // которая зависит от светлой/тёмной темы
  const colors = tokens(theme.palette.mode);

  // Подготовим массив «счетов» для вывода
  const invoices = [
    {
      date: "1 марта, 2020",
      number: "#MS-415646",
      amount: "₽180000",
    },
    {
      date: "10 февраля, 2021",
      number: "#RV-126749",
      amount: "₽250000",
    },
    {
      date: "5 апреля, 2020",
      number: "#QW-103578",
      amount: "₽12000",
    },
    {
      date: "25 июня, 2019",
      number: "#MS-415646",
      amount: "₽45000",
    },
    {
      date: "1 марта, 2019",
      number: "#AR-803481",
      amount: "₽350000",
    },
  ];

  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight="600">
          Выделенные средства
        </Typography>
      </Box>

      {invoices.map((item, index) => (
        <Box key={index}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
           
            <Box>
              <Typography variant="body1" fontWeight="600">
                {item.date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.number}
              </Typography>
            </Box>

            
            <Box display="flex" alignItems="center">
              <Typography variant="body1" fontWeight="600" mr={3}>
                {item.amount}
              </Typography>
              <PictureAsPdfIcon
                sx={{cursor: "pointer" }}
              />
            </Box>
          </Box>

          
          {index < invoices.length - 1 && (
            <Divider sx={{ mt: 2 }} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default RequestAllocationList;
