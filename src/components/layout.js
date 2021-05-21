import * as React from "react";
import { Link } from "gatsby";
import {
  Link as MuiLink,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  useScrollTrigger,
  makeStyles,
  Box,
} from "@material-ui/core";
import Logo from "../images/logo.png";

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Layout = ({ pageTitle, children }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Container classes={{ root: classes.menuContainer }}>
              <img src={Logo} className={classes.logoImg} />
              <Box flexGrow={1} />
              <MuiLink component={Link} to="/" className={classes.link}>
                Solutions
              </MuiLink>
              <MuiLink component={Link} to="/pricing" className={classes.link}>
                Customers
              </MuiLink>
              <MuiLink component={Link} to="/pricing" className={classes.link}>
                Download
              </MuiLink>
              <MuiLink component={Link} to="/pricing" className={classes.link}>
                Pricing
              </MuiLink>
              <MuiLink component={Link} to="/pricing" className={classes.link}>
                Blog
              </MuiLink>
              <MuiLink component={Link} to="/pricing" className={classes.link}>
                Resources
              </MuiLink>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <h1>{pageTitle}</h1>
        {children}
      </Container>
    </>
  );
};

const styles = (theme) => ({
  appBar: {
    backgroundColor: "#2d2d2d",
  },
  logoImg: {
    width: 174,
    height: 64,
    flex: [[0, 0, "64px;"]],
  },
  menuContainer: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    textTransform: "uppercase",
    color: "#ffffff",
    padding: [[0, 15]],
    fontWeight: 400,
    transition: "all .3s",

    "&:hover": {
      color: "#848484",
      textDecoration: "unset",
    },
  },
});

const useStyles = makeStyles(styles, { name: "Layout" });

export default Layout;
