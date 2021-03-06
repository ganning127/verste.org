import { Box, Flex, Text, Img, Link, Icon } from "@chakra-ui/react";
import * as React from "react";
import { NavContent } from "./NavContent";
import { useEffect, useState } from "react";

export const NavBar = ({ bg }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      bg={bg ? bg : scrollPosition == 0 ? "transparent" : "#fafaff !important"}
      py={4}
      position="sticky"
      shadow={scrollPosition == 0 ? "none" : "md"}
      top="0"
      id="navbar"
      transition="all 0.4s"
      zIndex={999999}
    >
      <Box as="header" position="relative" color="white">
        <Box
          height="100%"
          mx="auto"
          px={{
            base: "8",
            md: "8",
          }}
          pe={{
            base: "8",
            md: "8",
          }}
        >
          <Flex
            as="nav"
            aria-label="Site navigation"
            align="center"
            justify="space-between"
            height="100%"
          >
            <Box d="flex" alignItems="center" as="a" href="/">
              <Img src="/logo.png" h="10" display="inline" mr="3" />
              <Text
                as="h1"
                fontSize="3xl"
                fontWeight="extrabold"
                maxW="48rem"
                display="inline"
                color="brandLight.blue"
              >
                Verste
              </Text>
            </Box>
            <NavContent.Desktop
              display={{
                base: "none",
                md: "flex",
              }}
            />
            <NavContent.Mobile
              display={{
                base: "flex",
                md: "none",
              }}
            />
            <Box
              display={{
                base: "none",
                md: "block",
              }}
            >
              <Link
                href="https://wiki.verste.org/"
                bg="brandLight.caroBlue"
                _hover={{
                  bg: "brandLight.caroBlue",
                }}
                px={2}
                py={1}
                rounded="md"
                d="flex"
                alignItems="center"
                isExternal
              >
                <Text as="span">Start Reading</Text>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
