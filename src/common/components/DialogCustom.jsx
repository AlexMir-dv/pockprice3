import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ButtonCustom from "./ButtonCustom";
import InputSearch from "./InputSearch";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { IconButton } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { styled } from "@mui/material/styles";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const DialogCustom = ({ open, setOpen, maxWidthSize = "sm" }) => {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState(maxWidthSize);

  const handleClose = () => {
    setOpen(false);
  };

  const [showPassword, setShowPassword] = React.useState(true);
  const [showConfirmPassword, setConfirmShowPassword] = React.useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmShowPassword = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };


  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <Box>
            <Typography
              variant="fontSize22"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Sign up
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }} my={1}>
              <Typography variant="fontSize14">Already signed up?</Typography>
              <Link
                style={{
                  color: "rgb(242, 59, 47)",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
                to={"/"}
              >
                Log in
              </Link>
            </Box>

            <Box mb={3}>
              <ButtonCustom text={"Login"} />
            </Box>
            <Box
              component={"form"}
              sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <InputSearch
                TypeSign
                placeholder={"Email"}
                name={"Email"}
                IconStart={<AlternateEmailIcon />}
              />

              <InputSearch
                TypeSign
                type={showPassword ? "text" : 'password'}
                placeholder={"Password"}
                name={"Password"}
                IconStart={<LockIcon />}
                handleShowPassword={handleShowPassword}
                EndIcon={
                  showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />
                }
              />
              <InputSearch
                TypeSign
                type={showPassword ? "text" : 'password'}
                placeholder={"Confirm Password"}
                name={"Confirm Password"}
                IconStart={<LockIcon />}
                handleShowPassword={handleConfirmShowPassword}
                EndIcon={
                  showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />
                }
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <Typography variant="fontSize12400" mt={3}>
                We will regularly send you emails with offers regarding our
                services. You can unsubscribe from receiving these marketing
                emails at any time, free of charge, via the link in the emails.
              </Typography>
              <Typography variant="fontSize12400">
                By selecting Register or Social login you agree you've read and
                accepted ourUser Agreement. Please see ourPrivacy Policyfor
                information regarding the processing of your data.
              </Typography>
            </Box>

            <ButtonText mt={1}>
              <ButtonCustom danger text={"REGISTER"} />
            </ButtonText>
          </Box>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
};

const ButtonText = styled(Box)({
  "& button": {
    textTransform: "uppercase",
  },
});
export default DialogCustom;
