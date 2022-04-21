import {
  Box,
  Link,
  SimpleGrid,
  SimpleGridProps,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { FooterHeading } from "./FooterHeading.tsx";

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Navigate</FooterHeading>
      <Stack>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contribute">Contribute</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Resources</FooterHeading>
      <Stack>
        <Link href="https://verste.notion.site/Verste-HQ-f1228d401dee409d888621b7837cb55e">
          Notion
        </Link>
        <Link href="https://verste.notion.site/About-Verste-e03cb661bdcb43efa87b41b4cdfd1b0c">
          About Us
        </Link>
        <Link href="https://verste.notion.site/e17da3a5cdeb4138b135be5671c65aae?v=6ea64530cdc5454482efb8f7b2a66343">
          Our Team
        </Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
