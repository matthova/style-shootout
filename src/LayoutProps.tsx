import React from "react";

import { Box, Button, Input, Spacer, Stack, Text } from "./design-system";

export const LayoutProps: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
      height="100%"
      padding={{ mobile: 32, tablet: 64 }}
    >
      <Box display="flex">
        <Text
          typography={{
            mobile: "headingBold0",
            tablet: "headingBold2",
            desktop: "headingBold5",
          }}
          as="h1"
        >
          This form is very important
          <Text
            as="span"
            typography={{
              mobile: "heading0",
              tablet: "heading2",
              desktop: "heading5",
            }}
          >
            &nbsp;so you should fill it out
          </Text>
        </Text>
      </Box>
      <Spacer height={{ mobile: 16, tablet: 32 }} />
      <Stack direction="horizontal" width="100%" space="32px" flexWrap="wrap">
        <Box>
          <Input placeholder="...this is a placeholder" />
          <Spacer height="16px" />
        </Box>
        <Button size={{ mobile: "small", tablet: "medium" }} variant="primary">
          Submit
        </Button>
      </Stack>
      <Text typography="paragraph0" marginTop="auto">
        Important Footer Information
      </Text>
    </Box>
  );
};
