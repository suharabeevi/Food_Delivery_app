import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const FrameComponent = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-0 box-border max-w-full text-left text-xl text-text font-title-16px-regular">
      <div className="flex-1 bg-button overflow-hidden flex flex-col items-end justify-start pt-20 px-0 pb-6 box-border gap-[60px] max-w-full mq450:pt-[52px] mq450:pb-5 mq450:box-border mq750:gap-[30px_60px]">
        <div className="w-[1414px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1196px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap">
            <div className="w-[217px] flex flex-col items-start justify-start gap-[16px] text-5xl font-heading-24px-bold">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="w-[118px] flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-0">
                    <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-bold font-inherit shrink-0 [debug_commit:f6aba90] mq450:text-lgi mq450:leading-[19px]">
                      Bhashanagal
                    </h3>
                  </div>
                  <div className="relative text-xl leading-[28px] font-medium font-title-16px-regular inline-block min-w-[101px] mq450:text-base mq450:leading-[22px]">
                    Subscribe
                  </div>
                </div>
                <div className="relative text-base leading-[24px] font-title-16px-regular">
                  Get 10% off your first order
                </div>
              </div>
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-12 font-title-16px-regular text-base text-gray-600"
                placeholder="Enter your email"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="24px" height="24px" src="/iconsend.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#fafafa" },
                  "& .MuiInputBase-root": {
                    height: "48px",
                    paddingRight: "15px",
                  },
                  "& .MuiInputBase-input": {
                    color: "rgba(250, 250, 250, 0.4)",
                  },
                }}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="relative leading-[28px] font-medium inline-block min-w-[81px] mq450:text-base mq450:leading-[22px]">
                Support
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="w-[175px] relative leading-[24px] whitespace-pre-wrap inline-block">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </div>
                <div className="relative leading-[24px]">
                  bhaahanga,@gmail.com
                </div>
                <div className="relative leading-[24px] whitespace-nowrap">
                  +88015-88888-9999
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="relative leading-[28px] font-medium inline-block min-w-[85px] mq450:text-base mq450:leading-[22px]">
                Account
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="relative leading-[24px] inline-block min-w-[94px]">
                  My Account
                </div>
                <div className="relative leading-[24px] inline-block min-w-[123px]">
                  Login / Register
                </div>
                <div className="relative leading-[24px] inline-block min-w-[35px]">
                  Cart
                </div>
                <div className="relative leading-[24px] inline-block min-w-[61px]">
                  Wishlist
                </div>
                <div className="relative leading-[24px] inline-block min-w-[41px]">
                  Shop
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="relative leading-[28px] font-medium inline-block min-w-[101px] mq450:text-base mq450:leading-[22px]">
                Quick Link
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="relative leading-[24px] inline-block min-w-[109px]">
                  Privacy Policy
                </div>
                <div className="relative leading-[24px] inline-block min-w-[105px]">
                  Terms Of Use
                </div>
                <div className="relative leading-[24px] inline-block min-w-[32px]">
                  FAQ
                </div>
                <div className="relative leading-[24px] inline-block min-w-[66px]">
                  Contact
                </div>
              </div>
            </div>
            <div className="h-[210px] w-[198px] flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[24px]">
                <div className="relative leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
                  Download App
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px] text-xs text-gray-700">
                  <div className="w-0 h-[18px] relative leading-[18px] font-medium inline-block" />
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="h-20 w-20 relative overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/qr-code@2x.png"
                    />
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <img
                        className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/googleplay.svg"
                      />
                      <img
                        className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        alt=""
                        src="/appstore@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-6 flex flex-row items-start justify-start gap-[24px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/iconfacebook.svg"
                />
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/icontwitter.svg"
                />
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/iconinstagram.svg"
                />
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/iconlinkedin.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-10 flex flex-col items-center justify-start gap-[16px] opacity-[0.4] max-w-full text-base text-bg">
          <img
            className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/underline-4.svg"
          />
          <div className="h-6 flex flex-row items-center justify-start py-0 px-5 box-border opacity-[0.6] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-start gap-[6px] max-w-full">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/iconcopyright.svg"
              />
              <div className="relative leading-[24px]">
                Copyright Rimel 2022. All right reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );}
   export default FrameComponent