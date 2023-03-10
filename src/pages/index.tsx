import Image from "next/image";

export default function Home() {
  function addChannel() {
    window.Kakao.Channel.addChannel({
      channelPublicId: "_atExexj",
    });
  }

  return (
    <>
      <main>
        <div>
          <a id="add-channel-button" onClick={addChannel}>
            <Image
              src="/friendadd_large_yellow_rect.png"
              height={40}
              width={100}
              alt="카카오톡 채널 추가하기 버튼"
            />
          </a>
        </div>
        <div>
          <a
            id="kakao-talk-channel-add-button"
            href="http://pf.kakao.com/_atExexj/chat"
          >
            <Image
              src="/consult_small_yellow_pc.png"
              height={50}
              width={100}
              alt="톡상담"
            />
          </a>
        </div>
      </main>
    </>
  );
}
