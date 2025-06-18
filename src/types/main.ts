import { PropsWithChildren } from "react";

export type StyleTool = "CSS" | "tailwindCSS" | "SASS";
export interface UiStorageProviderType extends PropsWithChildren {
  tool?: StyleTool;
  className?: string;
}
