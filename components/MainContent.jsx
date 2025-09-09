import { Outlet } from "react-router-dom";

export default function MainContent() {
  return (
    <section className="flex-1 flex flex-col overflow-y-auto p-7">
      <Outlet />
    </section>
  );
}
