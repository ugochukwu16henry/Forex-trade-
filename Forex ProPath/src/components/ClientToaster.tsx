import { Toaster } from "sonner";
import { useEffect, useState } from "react";

export function ClientToaster() {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  if (!m) return null;
  return <Toaster theme="dark" position="top-right" richColors />;
}
