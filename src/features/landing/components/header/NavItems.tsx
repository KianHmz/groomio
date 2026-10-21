import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";
import { Link } from "react-router";

const NavItems = () => {
  return (
    <>
      <a
        href=""
        className="font-medium hover:text-dark-brown transition-colors"
      >
        num1
      </a>
      <a
        href=""
        className="font-medium hover:text-dark-brown transition-colors"
      >
        num2
      </a>
      <a
        href=""
        className="font-medium hover:text-dark-brown transition-colors"
      >
        num3
      </a>
      <Link to={ROUTES.PHONE_VERIFY}>
        <Button
          onClick={() => {}}
          className="font-medium bg-dark-brown hover:bg-tan hover:text-black hover:border-dark-brown transition-colors w-full md:w-auto"
        >
          Book Appointment
        </Button>
      </Link>
    </>
  );
};

export default NavItems;
