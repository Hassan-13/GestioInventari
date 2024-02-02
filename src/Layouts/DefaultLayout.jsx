import logo from "../logo.svg";

export default function Default({ children }) {
  return (
    <div className="justify-center w-full min-h-screen bg-gray-100">
      <header className=" flex justify-around items-center  py-6  bg-green-800">
        <div>
          <img src={logo} className="pointer-events-none h-16 color-gray-100" alt="logo" />
        </div>
        <div className="text-center text-gray-100 text-2xl">
          <a href="#">Gestió d'inventrai</a>
        </div>
      </header>
      <main className="container mx-auto">{children}</main>
    </div>
  );
}
