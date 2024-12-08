import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="relative flex items-center h-16 px-4 bg-gray-100">
      <div className="absolute top-2 right-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={50}
          className="object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
