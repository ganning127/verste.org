import { chakra, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

const DesktopNavLink = (props) => {
  return (
    <chakra.a
      fontWeight="normal"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderBottom="2px"
      borderColor="transparent"
      transition="all 0.4s"
      target={props.href.startsWith("http") ? "_blank" : "_self"}
      color="brandLight.gray"
      _hover={{
        color: "brandLight.blue",
      }}
      {...props}
    />
  );
};

const MobileNavLink = (props) => {
  return (
    <chakra.a
      display="block"
      textAlign="center"
      fontWeight="bold"
      py="5"
      fontSize="lg"
      color="gray.600"
      w="full"
      _hover={{
        bg: "blackAlpha.200",
      }}
      {...props}
    />
  );
};

export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
};
