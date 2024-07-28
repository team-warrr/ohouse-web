import { PropsWithChildren } from "react";

export default function View(props: PropsWithChildren) {
  return (
    <main className="flex flex-col justify-center items-center gap-2 p-2 max-w-[700px] mx-auto">
      {props.children}
    </main>
  );
}
