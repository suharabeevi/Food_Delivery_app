const FrameComponent3 = () => {
    return (
      <div className="w-[1322px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-left text-base text-secondary-2 font-title-16px-regular">
        <div className="flex-1 flex flex-col items-end justify-start gap-[22px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="w-[528px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border gap-[800px] max-w-full mq450:gap-[800px_400px]">
              <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-10 w-5 relative">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
                  </div>
                  <div className="relative leading-[20px] font-semibold inline-block min-w-[90px]">
                    Categories
                  </div>
                </div>
                <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-button mq450:text-3xl mq450:leading-[29px] mq1050:text-10xl mq1050:leading-[38px]">
                  Browse By Category
                </h1>
              </div>
              <div className="h-[86px] hidden flex-row items-start justify-start py-5 px-0 box-border gap-[8px]">
                <img
                  className="h-[46px] w-[46px] relative min-h-[46px]"
                  alt=""
                  src="/fill-with-left-arrow-1.svg"
                />
                <img
                  className="h-[46px] w-[46px] relative min-h-[46px]"
                  alt=""
                  src="/fill-with-right-arrow-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="h-[46px] flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-[46px] w-[46px] relative min-h-[46px]"
              alt=""
              src="/fill-with-left-arrow-2.svg"
            />
            <img
              className="h-[46px] w-[46px] relative min-h-[46px]"
              alt=""
              src="/fill-with-right-arrow-2.svg"
            />
          </div>
        </div>
      </div>
    );}
    export default FrameComponent3