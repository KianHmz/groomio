import { RouterProvider } from "react-router";
import { router } from "@/router";

const App = () => {
  return (
    <div className="min-h-screen bg-cream">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
