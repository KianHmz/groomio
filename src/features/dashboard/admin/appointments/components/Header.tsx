import MainButton from "@/components/shared/form/MainButton";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import AddModal from "./modal/addModal";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const { t } = useTranslation(["common"]);

  const [addModal, setAddModal] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center mt-3 mx-2">
      <Input
        className="w-80 h-10 text-md! p-3"
        type="search"
        placeholder={`${t("actions.search")}...`}
      />

      <MainButton
        className="text-md px-3 py-5"
        onClick={() => setAddModal(true)}
      >
        + {t("actions.new")}
      </MainButton>

      <AddModal open={addModal} onOpenChange={setAddModal} />
    </div>
  );
};

export default Header;
