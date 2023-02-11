import Image from "next/image";

export default function Home() {
  function addChannel() {
    window.Kakao.Channel.addChannel({
      channelPublicId: "_atExexj",
    });
  }
  function addbtn() {
    window.Kakao.Channel.createChatButton({
      container: "#kakao-talk-channel-chat-button",
      channelPublicId: "_atExexj",
      title: "consult",
      size: "small",
      color: "yellow",
      shape: "pc",
      supportMultipleDensities: true,
    });
  }

  return (
    <>
      <main>
        <div>
          아무거나
          <a id="add-channel-button" onClick={addChannel}>
            <Image
              src="/consult_small_yellow_pc.png"
              height={50}
              width={100}
              alt="카카오톡 채널 추가하기 버튼"
            />
          </a>
        </div>
      </main>
    </>
  );
}
