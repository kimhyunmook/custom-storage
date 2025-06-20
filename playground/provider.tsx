import { PropsWithChildren } from "react";
import { ToasterProvider } from "../src";
import { UiProvier, Container } from "next-props-shared";

export default function Provider({ children }: PropsWithChildren) {
  return (
    <div className="ui-provier">
      <UiProvier clickAble={true}>
        <Container title="Toast">
          <ToasterProvider>{children}</ToasterProvider>
        </Container>
      </UiProvier>
    </div>
  );
}
