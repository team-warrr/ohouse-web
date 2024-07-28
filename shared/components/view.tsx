import { PropsWithChildren } from "react";

export default function View(props: PropsWithChildren) {
  return <main className="flex flex-col gap-2 p-2 max-w-[500px] mx-auto">{props.children}</main>;
}
