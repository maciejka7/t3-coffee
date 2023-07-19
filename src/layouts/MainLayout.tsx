import type { ReactNode } from "react";
import { MainMenu } from "~/components/MainMenu/MainMenu";
import { NavigationMenu } from "~/components/ui/navigation-menu";

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col bg-stone-100 rounded-xl border border-stone-100 m-5">
      <MainMenu />
      <div className="p-5">
      {children}

      </div>
    </main>
  );
};

export default MainLayout;
