import SideBar from "./modules/sideBar/SideBar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex relative">
      <div className="absolute">
        <SideBar />
      </div>
      <div className="flex-1 overflow-x-hidden min-h-screen ml-[76px] sm:ml-0">
        <div className="flex flex-col justify-between">
          {children}
        </div>
      </div>
    </main>
  );
}