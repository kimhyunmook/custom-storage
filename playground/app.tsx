import { PropsWithChildren } from "react";
import { ToasterProvider } from "../src/index";
import "./styles/index.css";

export default function App({ children }: PropsWithChildren) {
  return (
    <div className="root">
      <ToasterProvider>{children}</ToasterProvider>
      1234
    </div>
  );
}
