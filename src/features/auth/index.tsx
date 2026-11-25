import Input from "@/components/shared/form/Input";
import { Label } from "@/components/ui/label";

interface AuthProps {}

const Auth = (props: AuthProps) => {
  return (
    <div className="min-h-screen">
      <Label />
      enter ur phone
      <Input />
    </div>
  );
};

export default Auth;
