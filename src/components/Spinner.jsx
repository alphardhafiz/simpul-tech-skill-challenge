import Loader from "../assets/loader.png";

export default function Spinner() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: 'column',
          gap: '12px',
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src={Loader}
          alt="Loader"
          style={{
            animation: "spin 2s linear infinite",
          }}
        />
        <style jsx="true">{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
        <h5 style={{ color: "#4F4F4F", fontSize: "14px" }}>
          Loading Chats ...
        </h5>
      </div>
    </>
  );
}
