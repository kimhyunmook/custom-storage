import ToasterProvider from "./provider/toaster/toaster.provider";
import { UiStorageProviderType } from "./types/main";
export default function UiStorageProvider({
  children,
  tool,
  className,
}: UiStorageProviderType) {
  const rootProviderClassName = className ? className : "";
  return (
    <div className={rootProviderClassName}>
      <ToasterProvider tool={tool}>{children}</ToasterProvider>
    </div>
  );
}
