import type { ReactNode } from "react";

type MessageType = "info" | "success" | "warning" | "error";

interface InlineMessageProps {
  message: ReactNode;
  type?: MessageType;
  className?: string;
}

const styles: Record<MessageType, string> = {
  info: "text-mist-900",
  success: "text-green-700",
  warning: "text-amber-700",
  error: "text-red-700",
};

const InlineMessage = ({
  message,
  type = "info",
  className = "",
}: InlineMessageProps) => {
  return <div className={`${styles[type]} ${className}`}>{message}</div>;
};

export default InlineMessage;
