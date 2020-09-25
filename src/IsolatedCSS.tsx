import React from "react";

import { Button, Input } from "./design-system";
import * as S from "./IsolatedCSSStyles";

export const IsolatedCSS: React.FC = () => {
  return (
    <S.Container>
      <S.TitleArea>
        <S.TitleBoldText>
          This form is very important
          <S.TitleText>&nbsp;so you should fill it out</S.TitleText>
        </S.TitleBoldText>
      </S.TitleArea>
      <S.InputArea>
        <S.Input placeholder="...this is a placeholder" />
        <Button size="medium" variant="primary">
          Submit
        </Button>
      </S.InputArea>
      <S.Footer>Important Footer Information</S.Footer>
    </S.Container>
  );
};
