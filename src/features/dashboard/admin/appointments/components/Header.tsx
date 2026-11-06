import MainButton from "@/components/shared/form/MainButton";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const { t } = useTranslation(["common"]);

  return (
    <div className="flex justify-between items-center mt-3 mx-2">
      <Input
        className="w-80 h-10 text-md! p-3"
        type="search"
        placeholder={`${t("actions.search")}...`}
      />
      <MainButton className="text-md px-3 py-5">
        + {t("actions.new")}
      </MainButton>
    </div>
  );
};

export default Header;
