import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import type { ComponentProps, ReactElement, ReactNode } from "react";

interface ModalProps extends ComponentProps<typeof Dialog> {
  triggerBtn?: ReactElement;
  title?: string;
  body?: ReactNode;
  footer?: ReactNode;
}

const Modal = ({ triggerBtn, title, body, footer, ...props }: ModalProps) => {
  return (
    <Dialog {...props}>
      {triggerBtn && <DialogTrigger render={triggerBtn} />}
      <DialogContent className="flex flex-col gap-3 overflow-hidden p-1 text-dark-brown bg-cream max-w-lg! max-h-[90dvh] sm:max-h-[85dvh]">
        <DialogHeader className="pt-4 ps-4 shrink-0">
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto px-3 flex flex-col gap-3 min-h-0 flex-1">
          {body}
        </div>

        {footer && <div className="flex gap-3 m-3 shrink-0">{footer}</div>}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
