import { Link, chakra, HTMLChakraProps, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FooterHeading } from "./FooterHeading.tsx";

export const SubscribeForm = (props: HTMLChakraProps<"form">) => {
  return (
    <>
      <Stack {...props}>
        <FooterHeading color="text.dark">Contact Us</FooterHeading>
        <Text>
          Email:{" "}
          <Link
            color="blue.500"
            _hover={{ color: "blue.700" }}
            href="mailto:hello@verste.org"
          >
            hello@verste.org
          </Link>
        </Text>

        <Text>
          Phone:{" "}
          <Link
            color="blue.500"
            _hover={{ color: "blue.700" }}
            href="tel:9195279302"
          >
            (919) 527-9302
          </Link>
        </Text>
      </Stack>
    </>
  );
};
