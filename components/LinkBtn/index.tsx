import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const LinkBtn = styled(Button)({
    backgroundColor: 'transparent',
    color: "#5F94D9",
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
      backgroundColor: '#5F94D9',
      borderColor: '#5F94D9',
      color: '#FFF',
    },
    '&:active': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: '#FFF',
    }
  });

export default LinkBtn;