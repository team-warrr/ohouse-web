import { Button } from "@nextui-org/react";
import Image from "next/image";

import View from "@/shared/components/view";

export default function AttendancePage() {
  return (
    <View>
      <Image alt="attendance" src="/attendance-image.avif" width={500} height={500} />
      <Button fullWidth size="lg" color="primary">
        앱으로 입장하기 &gt;
      </Button>
      <Image alt="event-notice" src="/event-notice-image.avif" width={500} height={500} />
      <Button fullWidth size="lg" color="primary">
        친구에게 공유하기
      </Button>
    </View>
  );
}
