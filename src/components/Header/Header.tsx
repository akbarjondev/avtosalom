import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import { SearchBar } from "../SearchBar/SearchBar";
import { TopLinks } from "../TopLinks/TopLinks";

export const Header = () => {
  return (
    <header className="container flex items-center h-[76px]">
      <Menu />
      <Logo className="ml-5 mr-9" />
      <SearchBar className="max-w-[400px] w-full" />
      <TopLinks />
    </header>
  );
}