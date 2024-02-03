import { useTranslations } from "next-intl";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import { SearchBar } from "../SearchBar/SearchBar";
import { TopLinks } from "../TopLinks/TopLinks";
import { Button } from "../ui/button";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

export const Header = () => {
  const t = useTranslations("Top");
  return (
    <header className="container flex items-center h-[76px]">
      <Menu />
      <Logo className="ml-5 mr-9" />
      <SearchBar className="max-w-[400px] w-full" />
      <TopLinks />
      <div className="flex gap-3 ml-auto">
        <Button className="bg-gray-200 text-gray-900 hover:text-white">{t('login')}</Button>
        <Button className="bg-primary-green text-white">{t('free_post')}</Button>
      </div>
      <LanguageSwitcher className="ml-2" />
    </header>
  );
}