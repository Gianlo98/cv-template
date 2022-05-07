import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const MenuBtn = styled(Button)({
    backgroundColor: 'transparent',
    color: "#FFF",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: '#5F94D9',
    },
    '&:active': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: '#5F94D9',
    }
  });


  export default MenuBtn;