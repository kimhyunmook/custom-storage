import { useToaster } from "../../src/provider/toaster/toaster.hook";

export default function toast() {
  const toaster = useToaster();
  return (
    <div>
      <button
        onClick={() => {
          toaster("info", "info 테스트", 33333333);
        }}
      >
        info
      </button>
      <button
        onClick={() => {
          toaster("warn", "warn 테스트");
        }}
      >
        warn
      </button>
    </div>
  );
}
