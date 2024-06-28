import spinner from "../assets/loading-spinner.gif";

const Loading = () => {
  return (
    <div className="text-center mx-auto h-[90vh] w-screen relative">
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <img
          src={spinner}
          alt="loading-spinner"
          className="text-center mx-auto w-[80px] h-[80px] "
        />
      </div>
    </div>
  );
};

export default Loading;
