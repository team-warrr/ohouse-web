import DeepLinkButton from "@/shared/components/deep-link-button";
import View from "@/shared/components/view";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const title = "기록 챌린지";

export const metadata = {
  title,
  openGraph: {
    title,
  },
};

export default function RecordChallengePage() {
  return (
    <View>
      <div className={"relative"}>
        <Image
          alt="record-challenge"
          src={"/record-challenge-preview-image.avif"}
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <DeepLinkButton
          className="bg-transparent text-white border-1 rounded-none absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          path={"record-challenge"}
        >
          더 편하게 앱으로 보기 {">"}
        </DeepLinkButton>
      </div>
      <div className={"px-[16px]"}>
        <header className={"flex flex-col gap-[17px] mt-[16px] mb-[15px] font-bold"}>
          <h1>#플레이팅필살템 챌린지 (7/22~8/4)</h1>
          <div className={"flex justify-between items-center"}>
            <a href={"/"} className={"cursor-pointer"}>
              <div>
                <div className={"flex items-center gap-[10px]"}>
                  <Image
                    src={"/record-challenge-profile-image.avif"}
                    alt={"record-challenge-profile-image"}
                    width={36}
                    height={36}
                    className={"rounded-full"}
                  />
                  <div className={"flex flex-col"}>
                    <div className={"text-[12px]"}>기록챌린지</div>
                    <div className={"text-[12px] text-gray-400"}>4일 전</div>
                  </div>
                </div>
              </div>
            </a>
            <Button
              className={"w-[78px] h-[30px] bg-blue-400 text-white rounded-[4px] cursor-pointer"}
            >
              + 팔로우
            </Button>
          </div>
        </header>
        <div className={"flex flex-col items-center"}>
          <Divider className="h-[10px] bg-gray-50 mb-[58px]" />
          <Image
            src={"/record-challenge-follow-image.avif"}
            alt={"record-challenge-follow-image"}
            width={500}
            height={100}
          />
          <Image
            src={"/record-challenge-content-image.avif"}
            alt={"record-challenge-content-image"}
            width={500}
            height={650}
          />
          <section>
            <Image
              src={"/record-challenge-content-description-image.avif"}
              alt={"record-challenge-content-description-image"}
              className="mx-auto"
              width={460}
              height={300}
            />
          </section>
          <section>
            <Image
              src={"/record-challenge-content-upload-image.webp"}
              alt={"record-challenge-content-upload-image"}
              width={460}
              height={835}
            />
            <Button
              fullWidth
              as={Link}
              href={"/image-upload"}
              size="lg"
              color="primary"
              className={"text-white rounded-[4px] mt-[20px]"}
            >
              사진 바로 올리기
            </Button>
          </section>
          <section>
            <Image
              src={"/record-challenge-content-participation-image.avif"}
              alt={"record-challenge-content-participation-image"}
              width={460}
              height={300}
            />
            <Button
              fullWidth
              size="lg"
              color="primary"
              className={"text-white rounded-[4px] mt-[20px]"}
            >
              #플레이팅필살템 채널 가기
            </Button>
          </section>
          <section>
            <Image
              src={"/record-challenge-content-reward-image.avif"}
              alt={"record-challenge-content-reward-image"}
              width={470}
              height={550}
            />
          </section>
          <section className="mb-[40px]">
            <Image
              src={"/record-challenge-content-coupon-discount-image.avif"}
              alt={"record-challenge-content-coupon-discount-image"}
              width={470}
              height={250}
            />
            <Button
              fullWidth
              size="lg"
              color="primary"
              className={"text-white rounded-[4px] mt-[20px]"}
            >
              월드 키친 기획전 스크랩 하러 가기
            </Button>
          </section>
          <section>
            <span className={"text-[13px] font-bold py-[10px]"}>
              📍챌린지 참여 전, 꼭 확인하세요!{" "}
            </span>
            <p className={"text-[13px] font-bold py-[10px]"}>
              - 챌린지 기간 : 2024. 07. 22 (월) ~ 2024. 08. 04 (일) <br />- 당첨자 발표 : 2024. 08.
              08 (목) <br />- 포인트 지급 : 2024. 08. 13 (화) 오후 6시 <br />- 쿠폰 지급 : 8/1 (목)
              * 7/31일까지 챌린지에 참여한 유저 대상으로 쿠폰 증정{" "}
            </p>
            <p className={"text-[13px] py-[10px]"}>
              - 하나의 게시글에 여러 개의 챌린지 해시태그를 추가하더라도, 제일 첫 번째 챌린지
              해시태그의 참여작으로만 인정돼요. <br />- 챌린지 공지 게시글 혹은 내 게시글의 좋아요,
              댓글은 챌린지 참여로 인정되지 않아요. <br />- 게시글/댓글을 삭제하거나 좋아요를
              취소하면 챌린지 참여로 인정되지 않아요. <br />- 게시글과 무관한 상품을 상품태그로
              입력할 경우 챌린지 참여로 인정되지 않고, 입력한 상품 태그는 삭제될 수 있어요. <br />-
              첫 업로드 포인트는 오늘의집에서 사진/영상 게시글을 처음 업로드하는 유저에게 지급돼요.
              포토 리뷰를 업로드 하더라도 게시글을 업로드하지 않았다면 리워드를 받을 수 있어요. 기존
              게시글을 삭제하더라도 업로드 경험이 있다면 리워드가 지급되지 않아요. <br />- 약관에
              따라 비공개된 게시글, 타인의 권리를 침해하는 게시글, 광고/협찬 게시글, 여러 ID로
              동시에 참여한 게시글, 비정상적인 게시글과 댓글(내용 반복, 댓글 나눠 달기, 의미를 알 수
              없는 댓글 등), 그밖에 챌린지 목적에 위배된 게시글이나 댓글은 챌린지 참여로 인정되지
              않아요. <br />- 챌린지 참여 후 발급 받는 할인 쿠폰은 7/31일까지 참여한 참여작 대상으로
              지급 되어요. 7/31일 이후에 참여한 유저는 쿠폰이 발급 되지 않아요. <br />- 발급 받은
              쿠폰은 8/4일까지 사용이 가능해요. <br />- 쿠폰은 기획전 상품 4만원 이상 구매 시 사용
              가능하며, 최대 할인 액은 4만원이에요.
              <br /> - 참여 포인트는 별도의 발표 없이 포인트 지급일에 작성자 ID로 지급돼요. 첫
              업로드 포인트는 포인트 지급일과 무관하게 내가 업로드한 날짜에 지급돼요.
              <br /> - 당첨자는 본 게시글에서 발표하며, 오늘의집에 등록된 휴대폰 번호로 별도의
              절차와 일정을 안내해요. 5만원 초과 경품 지급 시 제세공과금이 부과되며, 당첨자가
              부담해요.
              <br /> - 지급 포인트의 유효기간은 90일이며, 사용하지 않은 포인트는 재지급되지 않아요.
              포인트는 3만원 구매 이상 시 사용할 수 있어요. <br />- 본 챌린지는 연장 또는 조기종료될
              수 있어요. 그밖의 내용은 오늘의집 고객센터로 문의해주세요. (운영시간: 평일
              09:00-18:00)
            </p>
          </section>
        </div>
      </div>
    </View>
  );
}
