import { useTranslations } from "next-intl";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const t = useTranslations('Top')
  return (
    <search className={cn("flex items-center bg-gray-100 rounded-lg px-3 py-2.5", className)}>
      <SearchIcon className="text-gray-500 mr-3" />
      <Input placeholder={t('search_placeholder')} className="focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent rounded-0 shadow-none border-0 outline-none p-0 h-auto" />
    </search>
  );
}