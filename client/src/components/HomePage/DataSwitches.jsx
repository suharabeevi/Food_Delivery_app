import { Button } from "@mui/material";
import FrameComponent4 from "./FrameComponent4";

 const DataSwitches = () => {
  return (
    <div className="w-[1350px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-secondary-2 font-title-16px-regular">
      <div className="w-[1170px] flex flex-col items-start justify-start gap-[69.5px] max-w-full lg:gap-[35px_69.5px] mq750:gap-[17px_69.5px]">
        <div className="self-stretch h-[0.5px] relative box-border opacity-[0.3] border-t-[0.5px] border-solid border-button" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full lg:gap-[30px_60px]">
          <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <div className="h-10 w-5 relative">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
                </div>
                <div className="relative leading-[20px] font-semibold inline-block min-w-[89px]">
                  This Month
                </div>
              </div>
              <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-button mq450:text-3xl mq450:leading-[29px] mq1050:text-10xl mq1050:leading-[38px]">
                Best Selling Products
              </h1>
            </div>
            <Button
              className="h-14 w-[159px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fafafa",
                fontSize: "16",
                background: "#db4444",
                borderRadius: "4px",
                "&:hover": { background: "#db4444" },
                width: 159,
                height: 56,
              }}
            >
              View All
            </Button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] text-button">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
              <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
                <img
                  className="absolute top-[12px] left-[224px] w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart-6.svg"
                />
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
                  <img
                    className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[calc(50%_-_70px)] max-h-full w-[140px] object-cover"
                    loading="lazy"
                    alt=""
                    src="/672462-zah9d-5626-002-100-0000-lightthenorthfacexguccicoat-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative leading-[24px] font-medium inline-block min-w-[77px]">
                  Goli Soda
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[41px] whitespace-nowrap">
                    $260
                  </div>
                  <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-500 inline-block min-w-[41px] whitespace-nowrap">
                    $360
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
                  <div className="h-5 flex flex-row items-start justify-start">
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-28.svg"
                    />
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-29.svg"
                    />
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-30.svg"
                    />
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-31.svg"
                    />
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-32.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                    (65)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
              <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
                <img
                  className="absolute top-[12px] left-[224px] w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart-7.svg"
                />
                <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
                  <img
                    className="absolute top-[calc(50%_-_57px)] left-[calc(50%_-_94px)] w-[189px] h-[147px] object-cover"
                    loading="lazy"
                    alt=""
                    src="/547953-9c2st-8746-001-082-0000-lightguccisavoymediumdufflebag-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative leading-[24px] font-medium inline-block min-w-[80px]">
                  Cup Cake
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[42px] whitespace-nowrap">
                    $960
                  </div>
                  <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-500 inline-block min-w-[43px] whitespace-nowrap">
                    $1160
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
                  <div className="h-5 flex flex-row items-start justify-start">
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-33.svg"
                    />
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-34.svg"
                    />
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-35.svg"
                    />
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-36.svg"
                    />
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                      alt=""
                      src="/starhalffilled-3.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                    (65)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
              <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
                <img
                  className="absolute top-[12px] left-[224px] w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart-8.svg"
                />
                <img
                  className="absolute top-[35px] left-[40px] w-[190px] h-[180px] overflow-hidden z-[1]"
                  alt=""
                  src="/frame-610.svg"
                />
              </div>
              <FrameComponent4
                aK900WiredKeyboard="Ludoo"
                bagOfWords="$160"
                tfIdf="$170"
                randomForest="/vector-37.svg"
                decisionTree="/vector-38.svg"
                gradientBoosting="/vector-39.svg"
                xGBoost="/vector-40.svg"
                lightGBM="/starhalffilled-4.svg"
                catBoost="(65)"
                propPadding="unset"
                propMinWidth="49px"
                propMinWidth1="37px"
                propMinWidth2="36px"
                propBorderRadius="unset"
                propOverflow="hidden"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
              <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
                <img
                  className="absolute top-[12px] left-[224px] w-[34px] h-[34px]"
                  alt=""
                  src="/fill-heart-9.svg"
                />
                <div className="absolute top-[35px] left-[40px] w-[190px] h-[180px] overflow-hidden z-[1]">
                  <img
                    className="absolute top-[calc(50%_-_109px)] left-[calc(50%_-_80px)] w-[161px] h-[161px] object-cover"
                    loading="lazy"
                    alt=""
                    src="/sammoghadamkhamsehl-7mqshl-auunsplash-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative leading-[24px] font-medium">
                  Chicken Sanwich
                </div>
                <div className="flex flex-row items-start justify-start text-secondary-2">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[41px] whitespace-nowrap">
                    $360
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
                  <div className="h-5 flex flex-row items-start justify-start">
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-41.svg"
                    />
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-42.svg"
                    />
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-43.svg"
                    />
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-44.svg"
                    />
                    <img
                      className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                      alt=""
                      src="/vector-45.svg"
                    />
                  </div>
                  <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                    (65)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
  export default DataSwitches