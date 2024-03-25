import { useMemo } from "react";

 const UserInterface = ({
  todays,
  flashSales,
  propGap,
  propMinWidth,
  propMinWidth1,
}) => {
  const userInterfaceStyle = useMemo(() => {
    return {
      gap: propGap,
      minWidth: propMinWidth,
    };
  }, [propGap, propMinWidth]);

  const todaysStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[24px] min-w-[211px] text-left text-base text-secondary-2 font-title-16px-regular mq750:flex-1"
      style={userInterfaceStyle}
    >
      <div className="flex flex-row items-start justify-start gap-[16px]">
        <div className="h-10 w-5 relative">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
        </div>
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <div
            className="relative leading-[20px] font-semibold inline-block min-w-[64px]"
            style={todaysStyle}
          >
            {todays}
          </div>
        </div>
      </div>
      <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-button mq450:text-3xl mq450:leading-[29px] mq1050:text-10xl mq1050:leading-[38px]">
        {flashSales}
      </h1>
    </div>
  );
  }
  export default UserInterface