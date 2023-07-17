import type { ReactNode } from "react";
import { MainMenu } from "~/components/MainMenu/MainMenu";
import { NavigationMenu } from "~/components/ui/navigation-menu";

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-slate-400 to-slate-200">
      <MainMenu />
      {children}
    </main>
  );
};

export default MainLayout;
