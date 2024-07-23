import { Divider } from "@nextui-org/react";

export default function Footer() {
  return (
    <>
      <Divider />
      <div className="bg-gray-100 p-5 text-center border-t border-gray-300">
        <div className="mb-3">
          <a href="/about" className="mx-2 text-gray-700 hover:underline">
            회사 소개
          </a>
          <a href="/contact" className="mx-2 text-gray-700 hover:underline">
            고객 센터
          </a>
          <a href="/terms" className="mx-2 text-gray-700 hover:underline">
            이용 약관
          </a>
          <a href="/privacy" className="mx-2 text-gray-700 hover:underline">
            개인정보 처리방침
          </a>
        </div>
        <div className="px-10">
          <Divider />
        </div>
        <div className="text-gray-500 text-sm">
          &copy; 2023 오늘의 집 클론. All rights reserved.
        </div>
      </div>
    </>
  );
}
