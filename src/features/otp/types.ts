/* 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!
currently unusable 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

export type MessageType = "info" | "error" | "success";

export interface Message {
  type: MessageType;
  message: string;
}

export interface OtpState {
  triesLeft: number;
  expiresAt: number;
  lockedUntil: number | null;
}

export interface VerifyServerResult {
  valid: boolean;
  triesLeft: number | null;
  expiresAt: number | null;
  lockedUntil: number | null;
}

export interface ResendServerResult {
  triesLeft: number | null;
  expiresAt: number | null;
  lockedUntil: number | null;
}
