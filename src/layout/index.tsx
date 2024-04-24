import { ReactNode } from "react";
import { Header } from "../components";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
