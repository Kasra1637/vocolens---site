import type { ReactNode } from "react";

/**
 * Reuses the homepage demo's device frame CSS (styles.css `.demo-phone-frame`
 * / `.demo-phone-screen` / `.demo-phone-notch`) so article figures and the
 * hero demo share one phone shape.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center px-5 py-7">
      <div className="demo-phone-frame">
        <div className="demo-phone-notch" />
        <div className="demo-phone-screen">{children}</div>
      </div>
    </div>
  );
}
