import { TextField,  } from "@mui/material";
import { Link } from "react-router-dom";
export const FrameComponent = () => {
  return (
    <header className="self-stretch h-16 flex flex-col items-start justify-start gap-[26px] max-w-full text-left text-5xl text-button font-heading-24px-bold">
      <div className="w-[1326px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1056px] flex flex-row items-start justify-between gap-[20px] max-w-full">
          <div className="w-[603px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end gap-[232px] mq450:gap-[232px_116px]">
              <div className="h-6 w-[118px] relative hidden">
                <b className="absolute top-[0%] left-[0%] tracking-[0.03em] leading-[24px] hidden whitespace-nowrap w-full h-full">
                  Exclusive
                </b>
              </div>
              <div className="w-[253px] flex flex-row items-start justify-between gap-[20px] text-center text-base font-title-16px-regular mq1050:hidden">
                <div className="flex flex-row items-start justify-start">
                <Link to='/'>
                  <div className="cursor-pointer w-12 relative leading-[24px] inline-block min-w-[48px]">
                    Home
                  </div>
                  </Link>

                </div>
                <div className="h-6 w-[66px] relative hidden">
                  <div className="absolute top-[0%] left-[0%] leading-[24px] inline-block w-full h-full">
                    Contact
                  </div>
                </div>
                <div className="h-6 w-12 relative hidden">
                  <div className="absolute top-[0%] left-[0%] leading-[24px] hidden w-full h-full">
                    About
                  </div>
                </div>
                <Link to='/signup'>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
                  <div className="w-[61px] relative text-base leading-[24px] font-title-16px-regular text-button text-center inline-block min-w-[61px] whitespace-nowrap">
                    Sign Up
                  </div>
                </button>
                </Link>
              </div>
            </div>
          </div>
          <TextField
            className="[border:none] bg-[transparent] h-[38px] w-[243px] font-title-16px-regular text-xs text-gray-100"
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
              width: "243px",
            }}
          />
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