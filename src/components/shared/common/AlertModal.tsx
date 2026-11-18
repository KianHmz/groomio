import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { ReactElement, ReactNode } from "react";

interface AlertModalProps {
  triggerBtn: ReactElement;
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  cancelBtnTitle: string;
  actionBtnTitle: string;
}

const AlertModal = ({
  triggerBtn,
  icon,
  title,
  description,
  cancelBtnTitle,
  actionBtnTitle,
}: AlertModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={triggerBtn} />
      <AlertDialogContent
        size="sm"
        className="bg-cream! text-dark-brown border-destructive/20 pt-8"
      >
        <AlertDialogHeader>
          {icon && (
            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
              {icon}
            </AlertDialogMedia>
          )}
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="p-2">
          <AlertDialogCancel className="text-dark-brown bg-transparent hover:bg-transparent hover:text-dark-brown/80 border-none font-bold">
            {cancelBtnTitle}
          </AlertDialogCancel>
          <AlertDialogAction className="text-red-600 bg-transparent hover:bg-transparent hover:text-red-600/80 font-bold">
            {actionBtnTitle}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertModal;
