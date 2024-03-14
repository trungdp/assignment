import Packages from "@/app/components/packages";
import { ModalProvider } from "@/hooks/useModal";

export default function Home() {
  return (
    <ModalProvider>
      <main className="flex flex-col items-center justify-between min-h-screen py-24">
        <Packages />
      </main>
    </ModalProvider>
  );
}
