import { useState } from "react";

import {
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    TextField,
    Button,
  } from "@mui/material";
  import FrameComponent5 from "../HomePage/FrameComponent5"
  import AccountDropdown from "../HomePage/AccountDropdown";
  import InputFilter from "../HomePage/InputFilter"
  import DimensionalReducer from "../HomePage/DimensionalReducer";
  import FrameComponent3 from "../HomePage/FrameComponent3";
  import FrameComponent2 from "../HomePage/FrameComponent2";
  import DataSwitches from "../HomePage/DataSwitches";
  import LinkMaker from "../HomePage/LinkMaker";
  import DataComparator from "../HomePage/DataComparator";
  import FrameComponent1 from "../HomePage/FrameComponent1";
  import TreeList from "../HomePage/TreeList";
 import { Footer } from "../Footer/Footer";
 // Initially visible

  export const Drowndown = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    return (
      <div className="w-full relative bg-bg overflow-hidden flex flex-col items-end justify-start gap-[8px] tracking-[normal]">
        <header className="self-stretch bg-button overflow-hidden flex flex-row items-start justify-end pt-3 px-[136px] pb-1 box-border top-[0] z-[99] sticky max-w-full text-left text-sm text-text font-title-16px-regular mq750:pl-[34px] mq750:pr-[34px] mq750:box-border mq1050:pl-[68px] mq1050:pr-[68px] mq1050:box-border">
          <div className="w-[783px] flex flex-row items-start justify-between gap-[20px] max-w-full">
            <div className="w-[474px] flex flex-row items-start justify-start gap-[8px] max-w-full">
              <div className="h-[18px] flex-1 relative leading-[21px] inline-block max-w-full" />
              <div className="w-[68px] relative [text-decoration:underline] leading-[24px] font-semibold text-center hidden">
                ShopNow
              </div>
            </div>
            <FormControl
              className="h-6 w-[78px] font-title-16px-regular text-sm text-text"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "0px 0px 0px 0px",
                width: "78px",
                height: "24px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fafafa",
                  fontSize: 14,
                  fontWeight: "Regular",
                  fontFamily: "Poppins",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711338457/DropDown_r2mxhk.png"
                    style={{}}
                  />
                )}
              >
                <MenuItem>English</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </header>
        <section className="self-stretch h-[626px] relative">
          <FrameComponent5 />
          <div className="absolute top-[7px] left-[20px] w-[196px] h-[85px] flex flex-row flex-wrap items-start justify-start">
            <img
              className="mt-[-6.5px] h-[98px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711122599/64480603-8980-4278-bb9a-5b2ffdb5925e_1711116791789477156_hlyhro.png"
            />
          </div>
          <div className="absolute top-[0px] left-[248px] box-border w-[0.5px] h-[105.5px] opacity-[0.3] border-r-[0.5px] border-solid border-button" />
          <TextField
            className="[border:none] bg-[transparent] absolute top-[27px] left-[280px] font-title-16px-regular font-semibold text-base text-gray-500"
            placeholder="What are you looking for?"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <img width="30px" height="30px" src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711338917/Vector_1_azas2j.png" />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "#000" },
              "& .MuiInputBase-root": {
                height: "59px",
                backgroundColor: "#ecebeb",
                borderRadius: "10px",
              },
              "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.5)" },
              width: "700px",
            }}
          />
          <img
            className="cursor-pointer absolute top-[49px] left-[1169px] w-[37.3px] h-[24.1px]"
            alt=""
            src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711530955/Group_1000005943_igryg6.png"
          />
          <img
            className="cursor-pointer absolute top-[45px] left-[1266px] w-[30px] h-7"
            alt=""
            src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711530955/Vector_3_hrugpe.png"
          />
          <button className="cursor-pointer [border:none] py-3 px-2.5 bg-secondary-2 absolute top-[31px] left-[995px] rounded-[10px] w-[135px] flex flex-row items-start justify-start box-border hover:bg-salmon" onClick={toggleVisibility}>
            <div className="w-[108px] relative text-xl leading-[28px] font-medium font-title-16px-regular text-button text-center inline-block shrink-0 mq450:text-base mq450:leading-[22px]">
              Login
            </div>
          </button>
          {isVisible && (
          <AccountDropdown />
          )}
        </section>
        <section className="flex flex-col items-start justify-start pt-0 pb-[132px] pr-0 pl-5 box-border gap-[22px] max-w-full lg:pb-[86px] lg:box-border mq450:pb-9 mq450:box-border mq1050:pb-14 mq1050:box-border">
          <InputFilter />
          <DimensionalReducer />
          <div className="w-[1350px] flex flex-row items-start justify-center pt-0 px-5 pb-[32.5px] box-border max-w-full">
            <div className="w-[1170px] flex flex-col items-start justify-start gap-[60px] max-w-full lg:gap-[30px_60px]">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <Button
                  className="h-14 w-[234px]"
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fafafa",
                    fontSize: "16",
                    background: "#db4444",
                    borderRadius: "4px",
                    "&:hover": { background: "#db4444" },
                    width: 234,
                    height: 56,
                  }}
                >
                  View All Products
                </Button>
              </div>
              <div className="self-stretch h-[0.5px] relative box-border opacity-[0.3] border-t-[0.5px] border-solid border-button" />
            </div>
          </div>
          <FrameComponent3 />
          <FrameComponent2 />
          <DataSwitches />
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[132px] box-border max-w-full lg:pb-[86px] lg:box-border mq450:pb-9 mq450:box-border mq1050:pb-14 mq1050:box-border">
          <div className="w-[1170px] flex flex-col items-start justify-start gap-[60px] max-w-full lg:gap-[30px_60px]">
            <LinkMaker />
            <DataComparator />
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <Button
                className="h-14 w-[234px]"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fafafa",
                  fontSize: "16",
                  background: "#db4444",
                  borderRadius: "4px",
                  "&:hover": { background: "#db4444" },
                  width: 234,
                  height: 56,
                }}
              >
                View All Products
              </Button>
            </div>
          </div>
        </section>
        <FrameComponent1 />
        <TreeList />
        <Footer />
      </div>
    );}