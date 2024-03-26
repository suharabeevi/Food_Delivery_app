import UserInterface from "./UserInterface";

 const InputFilter = () => {
  return (
    <div className="w-[1380px] flex flex-row items-start justify-start pt-0 pb-[18px] pr-5 pl-0 box-border max-w-full text-left text-base text-secondary-2 font-title-16px-regular">
      <div className="h-[103px] flex-1 flex flex-row items-end justify-between pt-0 px-0 pb-1 box-border max-w-full gap-[20px] mq750:h-auto">
        <div className="mb-[-13px] w-[600px] flex flex-row items-end justify-start gap-[87px] max-w-[calc(100%_-_120px)] mq450:gap-[87px_22px] mq750:flex-wrap mq750:gap-[87px_43px]">
          <UserInterface todays="Today’s" flashSales="Flash Sales" />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border min-w-[196px] text-xs text-button">
            <div className="self-stretch flex flex-row items-end justify-start gap-[17px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[18px] font-medium inline-block min-w-[81px]">
                  Days
                </div>
                <b className="relative text-13xl tracking-[0.04em] leading-[30px] inline-block font-heading-30px-bold min-w-[46px] mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                  03
                </b>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="w-1 h-1 relative rounded-[50%] bg-hover-button" />
                  <div className="w-1 h-1 relative rounded-[50%] bg-hover-button" />
                </div>
              </div>
              <div className="h-[50px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border gap-[4px]">
                <div className="relative leading-[18px] font-medium inline-block min-w-[35px] shrink-0 [debug_commit:f6aba90]">
                  Hours
                </div>
                <b className="relative text-13xl tracking-[0.04em] leading-[30px] inline-block font-heading-24px-bold min-w-[43px] shrink-0 [debug_commit:f6aba90] mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                  23
                </b>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="w-1 h-1 relative rounded-[50%] bg-hover-button" />
                  <div className="w-1 h-1 relative rounded-[50%] bg-hover-button" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[18px] font-medium inline-block min-w-[49px]">
                  Minutes
                </div>
                <b className="relative text-13xl tracking-[0.04em] leading-[30px] inline-block font-heading-24px-bold min-w-[40px] mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                  19
                </b>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="w-1 h-1 relative rounded-[50%] bg-hover-button" />
                  <div className="w-1 h-1 relative rounded-[50%] bg-hover-button" />
                </div>
              </div>
              <div className="h-[50px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border gap-[4px]">
                <div className="relative leading-[18px] font-medium inline-block min-w-[52px] shrink-0 [debug_commit:f6aba90]">
                  Seconds
                </div>
                <b className="relative text-13xl tracking-[0.04em] leading-[30px] inline-block font-heading-24px-bold min-w-[45px] shrink-0 [debug_commit:f6aba90] mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
                  56
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[46px] flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-[46px] w-[46px] relative min-h-[46px]"
            loading="lazy"
            alt=""
            src="/fill-with-left-arrow.svg"
          />
          <img
            className="h-[46px] w-[46px] relative min-h-[46px]"
            loading="lazy"
            alt=""
            src="/fill-with-right-arrow.svg"
          />
        </div>
      </div>
    </div>
  );}
  export default InputFilter