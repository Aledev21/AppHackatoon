import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex items-start p-2">
      <div className="flex">
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
