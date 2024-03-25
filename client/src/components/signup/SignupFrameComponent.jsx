import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

export const SignupFrameComponent = () => {
  return (
    <header className="self-stretch h-[70px] flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border gap-[26px] max-w-full text-center text-base text-button font-title-16px-regular">
      <div className="w-[1195px] flex flex-row items-start justify-start py-0 px-[52px] box-border max-w-full lg:pl-[26px] lg:pr-[26px] lg:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
          <div className="w-[241px] flex flex-col items-start justify-start">
            <div className="w-32 h-[27px] flex flex-row flex-wrap items-start justify-start relative">
              <img
                className="h-[60px] w-[99px] absolute !m-[0] top-[calc(50%_-_40px)] left-[calc(50%_-_95px)] object-cover"
                loading="lazy"
                alt=""
                src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711122599/64480603-8980-4278-bb9a-5b2ffdb5925e_1711116791789477156_hlyhro.png"
              />
            </div>
          </div>
          <div className="w-12 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[24px]">Home</div>
            </div>
          </div>
          <div className="w-[127px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
            <button className="cursor-pointer [border:none] pt-0 px-0 pb-0 bg-[transparent] w-[61px] h-6 flex flex-col items-start justify-start box-border">
              <div className="self-stretch relative text-base leading-[24px] font-title-16px-regular text-button text-center inline-block min-w-[61px] whitespace-nowrap">
                Sign Up
              </div>
              <img
                className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                alt=""
                src="/underline.svg"
              />
            </button>
          </div>
          <div className="w-[243px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-[38px] font-title-16px-regular text-xs text-gray-100"
              placeholder="What are you looking for?"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="24px" height="24px" src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711338917/Vector_1_azas2j.png" />
                ),
              }}
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "38px",
                  backgroundColor: "#f5f5f5",
                  paddingRight: "12px",
                  borderRadius: "0px 0px 0px 0px",
                  fontSize: "12px",
                },
                "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.5)" },
              }}
            />
          </div>
        </div>
      </div>
      <img
        className="self-stretch h-0 relative max-w-full overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/line-3.svg"
      />
    </header>
  )}