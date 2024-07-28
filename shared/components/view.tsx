import { PropsWithChildren } from "react";

export default function View(props: PropsWithChildren) {
  return (
    <main className="flex flex-col items-center justify-center gap-2 p-2">{props.children}</main>
  );
}
