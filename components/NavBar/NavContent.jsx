import {
  Box,
  Center,
  HStack,
  Stack,
  StackDivider,
  Link,
  Text,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { NavLink } from "./NavLink";
import { NavList } from "./NavList";
import { NavListItem } from "./NavListItem";
import { AiOutlineRight } from "react-icons/ai";

const links = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contribute",
    href: "/contribute",
  },
  {
    label: "Contact Us",
    href: "mailto:hello@verste.org",
  },
];

const MobileNavContent = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props}>
      <Center
        as="button"
        p="2"
        fontSize="2xl"
        onClick={onToggle}
        color="gray.600"
      >
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </Center>
      <NavList
        pos="absolute"
        insetX="0"
        bg="brandLight.lighterBlue"
        top="64px"
        animate={isOpen ? "enter" : "exit"}
      >
        <Stack spacing="0">
          {links.map((link, index) => (
            <NavListItem key={index}>
              <NavLink.Mobile href={link.href}>{link.label}</NavLink.Mobile>
            </NavListItem>
          ))}

          <NavListItem>
            <NavLink.Mobile href="https://wiki.verste.org/">
              <Text as="span">Start Reading</Text>
              <Icon ml="2" as={AiOutlineRight} fontSize="xl" color="#FFC020" />
            </NavLink.Mobile>
          </NavListItem>

          <NavListItem
            style={{
              flex: "1",
            }}
          ></NavListItem>
        </Stack>
      </NavList>
    </Box>
  );
};

const DesktopNavContent = (props) => {
  return (
    <HStack spacing="6" align="stretch" {...props}>
      {links.map((link, index) => (
        <NavLink.Desktop
          key={index}
          href={link.href}
          fontSize="xl"
          _hover={{
            color: "brandLight.black",
          }}
        >
          {link.label}
        </NavLink.Desktop>
      ))}
    </HStack>
  );
};

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};
