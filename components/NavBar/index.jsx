import { Box, Flex, Text, Img, Link, Icon } from "@chakra-ui/react";
import * as React from "react";
import { NavContent } from "./NavContent";
import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

export const NavBar = () => {
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
      bg={scrollPosition == 0 ? "transparent" : "brandLight.lighterBlue"}
      pt="1"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <Box as="header" height="16" position="relative" color="white">
        <Box
          height="100%"
          // mx="auto"
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
            <Box d="flex" alignItems="center">
              <Img src="/logo.png" h="12" display="inline" mr="3" />
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
                href="https://verste.herokuapp.com/"
                bg="rgba(94, 159, 210, 0.8)"
                _hover={{
                  bg: "brandLight.caroBlue",
                }}
                px={2}
                py={1}
                rounded="md"
                d="flex"
                alignItems="center"
              >
                <Text as="span">Start Reading</Text>
                <Icon
                  ml="2"
                  as={AiOutlineRight}
                  fontSize="xl"
                  color="#FFC020"
                />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};