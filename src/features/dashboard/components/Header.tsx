interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header className="flex justify-between items-center px-2 py-3 mb-4">
      <div className="flex items-center gap-2 text-dark-brown">
        <span className="text-3xl text-cream font-medium bg-dark-brown rounded-full px-3 py-1">G</span>
        <h1 className="text-xl font-bold">Groomio</h1>
      </div>
      <div className="flex flex-col items-end text-md">
        <span className="font-bold text-dark-brown">Kian Hamzavi</span>
        <span className="text-tan">+989178895410</span>
      </div>
    </header>
  );
};

export default Header;
