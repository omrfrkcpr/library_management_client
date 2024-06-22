import spinner from "../assets/loading-spinner.gif";

const Loading = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="loading-spinner"
        className="text-center mx-auto w-[100px] h-[100px]"
      />
    </div>
  );
};

export default Loading;
