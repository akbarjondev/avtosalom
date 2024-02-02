import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Top')
  return (
    <div>Home page: {t('comparisons')}</div>
  );
}
