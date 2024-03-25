import { Button } from "@mui/material";

 const LinkMaker = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full text-left text-29xl text-text font-heading-24px-bold">
      <div className="flex-1 bg-button overflow-hidden flex flex-row items-end justify-start py-0 pr-11 pl-0 box-border gap-[27px] max-w-full lg:pr-[22px] lg:box-border mq1050:flex-wrap mq1050:p-5 mq1050:box-border">
        <div className="w-[499px] flex flex-col items-start justify-start py-0 pr-0 pl-14 box-border min-w-[499px] min-h-[379px] max-w-full mq750:pl-7 mq750:box-border mq750:min-w-full mq1050:flex-1 mq1050:min-h-[auto]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px_32px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[0.04em] leading-[60px] font-semibold font-inherit mq450:text-10xl mq450:leading-[36px] mq1050:text-19xl mq1050:leading-[48px]">
              <p className="m-0">{`Explore Taste 0f `}</p>
              <p className="m-0">Kerala</p>
            </h1>
            <div className="w-80 flex flex-col items-start justify-start gap-[40px] text-base text-button font-title-16px-regular mq450:gap-[20px_40px]">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-between gap-[20px]">
                <div className="h-[62px] w-[62px] relative">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-bg" />
                  <div className="absolute h-[54.84%] w-[51.61%] top-[22.58%] right-[24.19%] bottom-[22.58%] left-[24.19%] flex flex-col items-start justify-start z-[1]">
                    <div className="h-4 flex flex-row items-start justify-start py-0 pr-2 pl-[5px] box-border">
                      <div className="relative leading-[20px] font-semibold inline-block min-w-[19px] shrink-0 [debug_commit:f6aba90]">
                        23
                      </div>
                    </div>
                    <div className="relative text-2xs leading-[18px] inline-block min-w-[32px] shrink-0 [debug_commit:f6aba90]">
                      Hours
                    </div>
                  </div>
                </div>
                <div className="h-[62px] w-[62px] relative">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-bg" />
                  <div className="absolute h-[54.84%] w-[45.16%] top-[22.58%] right-[27.42%] bottom-[22.58%] left-[27.42%] flex flex-col items-start justify-start z-[1]">
                    <div className="h-4 flex flex-row items-start justify-start py-0 pr-1.5 pl-px box-border">
                      <div className="relative leading-[20px] font-semibold inline-block min-w-[21px] shrink-0 [debug_commit:f6aba90]">
                        05
                      </div>
                    </div>
                    <div className="relative text-2xs leading-[18px] inline-block min-w-[28px] shrink-0 [debug_commit:f6aba90]">
                      Days
                    </div>
                  </div>
                </div>
                <div className="h-[62px] w-[62px] relative">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-bg" />
                  <div className="absolute h-[54.84%] w-[67.74%] top-[22.58%] right-[16.13%] bottom-[22.58%] left-[16.13%] flex flex-col items-start justify-start py-0 px-[10.5px] box-border z-[1]">
                    <div className="h-4 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                      <div className="mb-[-4px] relative leading-[20px] font-semibold inline-block min-w-[18.2px] shrink-0 [debug_commit:f6aba90]">
                        59
                      </div>
                    </div>
                    <div className="ml-[-11px] relative text-2xs leading-[18px] inline-block min-w-[43px] shrink-0 [debug_commit:f6aba90]">
                      Minutes
                    </div>
                  </div>
                </div>
                <div className="h-[62px] w-[62px] relative">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-bg" />
                  <div className="absolute h-[54.84%] w-[77.42%] top-[22.58%] right-[11.29%] bottom-[22.58%] left-[11.29%] flex flex-col items-start justify-start z-[1]">
                    <div className="h-4 flex flex-row items-start justify-start py-0 pr-4 pl-3 box-border">
                      <div className="relative leading-[20px] font-semibold inline-block min-w-[20px] shrink-0 [debug_commit:f6aba90]">
                        35
                      </div>
                    </div>
                    <div className="relative text-2xs leading-[18px] inline-block min-w-[48px] shrink-0 [debug_commit:f6aba90]">
                      Seconds
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="w-[171px] h-14"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fafafa",
                  fontSize: "16",
                  background: "#00ff66",
                  borderRadius: "4px",
                  "&:hover": { background: "#00ff66" },
                  width: 171,
                  height: 56,
                }}
              >
                Buy Now!
              </Button>
            </div>
          </div>
        </div>
        <div className="h-[500px] flex-1 relative min-w-[390px] max-w-full mq750:min-w-full">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[26px] rounded-[50%] bg-gainsboro [filter:blur(200px)] w-[504px]" />
          <div className="absolute top-[37px] left-[0px] w-[600px] h-[420px] overflow-hidden z-[1]">
            <img
              className="absolute top-[calc(50%_-_165px)] left-[calc(50%_-_284px)] w-[568px] h-[330px] object-contain"
              loading="lazy"
              alt=""
              src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388278/Frame_694_fykcry.png"
            />
          </div>
        </div>
      </div>
    </div>
  );}
   export default LinkMaker