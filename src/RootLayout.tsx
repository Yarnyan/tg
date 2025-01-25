import { useEffect } from "react";
import SideBar from "./modules/sideBar/SideBar";
import { useAppDispatch } from "./hooks/redux";
import { setActiveChat } from "./store/reducers/chatSlice";

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleClick = () => {
      const chat = localStorage.getItem('activeChat');
      const theme = localStorage.setItem('theme', 'dark');
      if (chat) {
        dispatch(setActiveChat(JSON.parse(chat)));
      }
    };
    handleClick();
  }, [dispatch]);

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