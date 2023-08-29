import Link from "next/link";

const Header = () => {
  const navElements = [
    { id: 1, navName: "Home", link: "/" },
    {
      id: 2,
      navName: "Más Info",
      link: "/checkout",
    },
  ];
  return (
    <div className="bg-purple-900">
      <ul className="flex space-x-7 justify-center">
        {navElements.map((element) => (
          <li key={element.id} className="hover:bg-white hover:text-black p-6 h-full text-white text-2xl">
            <Link className="h-full" href={element.link}>{element.navName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
