import React from "react";

import { Button, Input, Spacer, Stack } from "./design-system";
import * as S from "./AddStacksStyles";

export const AddStacks: React.FC = () => {
  return (
    <S.Container>
      <S.TitleArea>
        <S.TitleBoldText>
          This form is very important
          <S.TitleText>&nbsp;so you should fill it out</S.TitleText>
        </S.TitleBoldText>
      </S.TitleArea>
      <Spacer height={{ mobile: 16, tablet: 32 }} />
      <Stack direction="horizontal" width="100%" space="32px" flexWrap="wrap">
        <div>
          <S.Input placeholder="...this is a placeholder" />
          <Spacer height="16px" />
        </div>
        <div>
          <Button size="medium" variant="primary">
            Submit
          </Button>
        </div>
      </Stack>
      <S.Footer>Important Footer Information</S.Footer>
    </S.Container>
  );
};
