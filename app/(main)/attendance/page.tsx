import { Button } from "@nextui-org/react";
import Image from "next/image";

import View from "@/shared/components/view";

const title = "행운 출첵";

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function AttendancePage() {
  return (
    <View>
      <Image alt="attendance" src="/attendance-image.avif" width={500} height={500} />
      <Button fullWidth size="lg" color="primary" className="rounded-[4px]">
        앱으로 입장하기 &gt;
      </Button>
      <Image alt="event-notice" src="/event-notice-image.avif" width={500} height={500} />
      <Button fullWidth size="lg" color="primary" className="rounded-[4px]">
        친구에게 공유하기
      </Button>
    </View>
  );
}
