import { Button } from "@mui/material";

const DataComparator = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full text-left text-base text-button font-title-16px-regular lg:gap-[30px_60px]">
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-secondary-2 mq750:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="h-10 w-5 relative">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
            </div>
            <div className="relative leading-[20px] font-semibold inline-block min-w-[106px]">
              Our Products
            </div>
          </div>
          <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-bold text-button mq450:text-3xl mq450:leading-[29px] mq1050:text-10xl mq1050:leading-[38px]">
            Explore Our Products
          </h1>
        </div>
        <div className="h-[46px] flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-[46px] w-[46px] relative min-h-[46px]"
            loading="lazy"
            alt=""
            src="/fill-with-left-arrow-3.svg"
          />
          <img
            className="h-[46px] w-[46px] relative min-h-[46px]"
            loading="lazy"
            alt=""
            src="/fill-with-right-arrow-3.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
          <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
            <img
              className="absolute top-[12px] left-[224px] w-[34px] h-[34px]"
              loading="lazy"
              alt=""
              src="/fill-heart-10.svg"
            />
            <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[38px] max-h-full w-[115px] object-cover"
                loading="lazy"
                alt=""
                src="/71rdoexxtrl-1@2x.png"
              />
            </div>
          </div>
          <div className="w-[185px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[47px]">
              Chips
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
              <div className="flex flex-row items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block min-w-[37px] whitespace-nowrap">
                  $100
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
                <div className="h-5 flex-1 flex flex-row items-start justify-start">
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-46.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-47.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-48.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-49.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-50.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                  (35)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
          <div className="self-stretch rounded bg-secondary overflow-hidden flex flex-col items-start justify-start pt-[15px] px-0 pb-0 gap-[14px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-11 pl-9 mq450:pr-5 mq450:box-border">
              <div className="flex-1 flex flex-row items-start justify-start relative">
                <img
                  className="h-[34px] w-[34px] absolute !m-[0] top-[-3px] right-[-32px]"
                  alt=""
                  src="/fill-heart.svg"
                />
                <div className="h-[180px] flex-1 relative overflow-hidden z-[1]">
                  <img
                    className="absolute h-[calc(100%_-_17px)] top-[8px] bottom-[9px] left-[22px] max-h-full w-[146px] object-cover"
                    loading="lazy"
                    alt=""
                    src="/eos250d03500x500-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <Button
              className="self-stretch h-[41px] mq450:pl-5 mq450:pr-5 mq450:box-border"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#000",
                borderRadius: "0px 0px 4px 4px",
                "&:hover": { background: "#000" },
                height: 41,
              }}
            >
              Add To Cart
            </Button>
          </div>
          <div className="w-[189px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[47px]">
              Chips
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
              <div className="flex flex-row items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block min-w-[41px] whitespace-nowrap">
                  $360
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
                <div className="h-5 flex-1 flex flex-row items-start justify-start">
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-51.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-52.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-53.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-54.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-55.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                  (95)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
          <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
            <div className="absolute top-[12px] right-[12px] h-[34px] flex flex-col items-start justify-start gap-[8px]">
              <img
                className="w-[34px] h-[34px] relative"
                alt=""
                src="/fill-heart.svg"
              />
              <img
                className="w-[34px] h-[34px] relative hidden"
                alt=""
                src="/fill-eye.svg"
              />
            </div>
            <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
              <img
                className="absolute w-[calc(100%_-_18px)] top-[0px] right-[9px] left-[9px] max-w-full overflow-hidden h-[180px] object-cover"
                loading="lazy"
                alt=""
                src="/ideapadgaming3i01500x500-1@2x.png"
              />
            </div>
          </div>
          <div className="w-[196px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[47px]">
              Chips
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
              <div className="flex flex-row items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block min-w-[40px] whitespace-nowrap">
                  $700
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
                <div className="h-5 flex-1 flex flex-row items-start justify-start">
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-56.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-57.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-58.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-59.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-60.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block min-w-[40px]">
                  (325)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
          <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
            <div className="absolute top-[12px] right-[12px] h-[34px] flex flex-col items-start justify-start">
              <img
                className="w-[34px] h-[34px] relative"
                alt=""
                src="/fill-heart.svg"
              />
            </div>
            <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden hidden" />
            <img
              className="absolute top-[29px] left-[calc(50%_-_89px)] w-[179px] h-[198px] object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/curologyj7pkvqrtusmunsplash-1@2x.png"
            />
          </div>
          <div className="w-[198px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[47px]">
              Chips
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
              <div className="flex flex-row items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block min-w-[42px] whitespace-nowrap">
                  $500
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
                <div className="h-5 flex-1 flex flex-row items-start justify-start">
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-61.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-62.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-63.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-64.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-65.svg"
                  />
                </div>
                <div className="w-10 relative leading-[21px] font-semibold inline-block shrink-0">
                  (145)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
          <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
            <div className="absolute top-[12px] right-[12px] h-[34px] flex flex-col items-start justify-start gap-[8px]">
              <img
                className="w-[34px] h-[34px] relative"
                loading="lazy"
                alt=""
                src="/fill-heart-14.svg"
              />
              <img
                className="w-[34px] h-[34px] relative hidden"
                alt=""
                src="/fill-eye.svg"
              />
            </div>
            <button className="cursor-pointer [border:none] py-1 px-3 bg-button1 absolute top-[12px] left-[12px] rounded flex flex-row items-start justify-start hover:bg-limegreen">
              <div className="relative text-xs leading-[18px] font-title-16px-regular text-text text-left inline-block min-w-[27px]">
                NEW
              </div>
            </button>
            <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
              <img
                className="absolute w-[calc(100%_-_10px)] top-[calc(50%_-_66px)] right-[5px] left-[5px] max-w-full overflow-hidden h-[133px] object-cover"
                loading="lazy"
                alt=""
                src="/newmercedesbenzgtrlicensedrideoncarkidselectrictoycar-1@2x.png"
              />
            </div>
          </div>
          <div className="w-[190px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[47px]">
              Chips
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
              <div className="flex flex-row items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block min-w-[42px] whitespace-nowrap">
                  $960
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
                <div className="h-5 flex-1 flex flex-row items-start justify-start">
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-66.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-67.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-68.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-69.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-70.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                  (65)
                </div>
              </div>
            </div>
            <div className="h-5 hidden flex-row items-start justify-start gap-[8px]">
              <img
                className="h-5 w-5 relative min-h-[20px]"
                alt=""
                src="/group-1000005935.svg"
              />
              <div className="h-5 w-5 relative rounded-[50%] bg-secondary-2" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
          <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
            <div className="absolute top-[12px] right-[12px] h-[34px] flex flex-col items-start justify-start gap-[8px]">
              <img
                className="w-[34px] h-[34px] relative"
                alt=""
                src="/fill-heart-15.svg"
              />
              <img
                className="w-[34px] h-[34px] relative hidden"
                alt=""
                src="/fill-eye.svg"
              />
            </div>
            <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
              <img
                className="absolute w-[calc(100%_-_4px)] top-[8px] right-[2px] left-[2px] max-w-full overflow-hidden h-[164px] object-cover"
                alt=""
                src="/copa-sense-1@2x.png"
              />
            </div>
          </div>
          <div className="w-[191px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[47px]">
              Chips
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
              <div className="flex flex-row items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block min-w-[43px] whitespace-nowrap">
                  $1160
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
                <div className="h-5 flex-1 flex flex-row items-start justify-start">
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-71.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-72.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-73.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-74.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-75.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                  (35)
                </div>
              </div>
            </div>
            <div className="w-12 h-5 flex flex-row items-start justify-start gap-[8px]">
              <img
                className="h-5 w-5 relative hidden"
                alt=""
                src="/group-1000005935.svg"
              />
              <div className="h-5 w-5 relative rounded-[50%] bg-secondary-2 hidden" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
          <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
            <img
              className="absolute top-[12px] left-[224px] w-[34px] h-[34px]"
              alt=""
              src="/fill-heart-16.svg"
            />
            <button className="cursor-pointer [border:none] py-1 px-3 bg-button1 absolute top-[12px] left-[12px] rounded flex flex-row items-start justify-start hover:bg-limegreen">
              <div className="relative text-xs leading-[18px] font-title-16px-regular text-text text-left inline-block min-w-[27px]">
                NEW
              </div>
            </button>
            <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden z-[1]">
              <img
                className="absolute w-[calc(100%_-_12px)] top-[15px] right-[6px] left-[6px] max-w-full overflow-hidden h-[150px] object-cover"
                loading="lazy"
                alt=""
                src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388732/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png_1_k0kywp.png"
              />
            </div>
          </div>
          <div className="w-[190px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[47px]">
              Chips
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
              <div className="flex flex-row items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block min-w-[42px] whitespace-nowrap">
                  $660
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
                <div className="h-5 flex-1 flex flex-row items-start justify-start">
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-76.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-77.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-78.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-79.svg"
                  />
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/starhalffilled-5.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                  (55)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[248px] max-w-[270px]">
          <div className="self-stretch h-[250px] relative rounded bg-secondary overflow-hidden shrink-0">
            <img
              className="absolute top-[12px] left-[224px] w-[34px] h-[34px]"
              alt=""
              src="/fill-heart-17.svg"
            />
            <img
              className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden object-cover z-[1]"
              alt=""
              src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388732/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png_1_k0kywp.png"
            />
          </div>
          <div className="w-[190px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[47px]">
              Chips
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-secondary-2">
              <div className="flex flex-row items-start justify-start">
                <div className="relative leading-[24px] font-medium inline-block min-w-[42px] whitespace-nowrap">
                  $660
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
                <div className="h-5 flex-1 flex flex-row items-start justify-start">
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-80.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-81.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-82.svg"
                  />
                  <img
                    className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                    alt=""
                    src="/vector-83.svg"
                  />
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/starhalffilled-6.svg"
                  />
                </div>
                <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
                  (55)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
  export default DataComparator