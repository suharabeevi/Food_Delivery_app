import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constant/endpoint";
import End_Points from "../../constant/endpoint";
import {
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    TextField,
    Button,
  } from "@mui/material";
  import {FrameComponent} from "./FrameComponent"
  import {Footer} from "../Footer/Footer";
  
  export const LogIn = () => {
    const [data, setData] = useState({
      email: "",
      password: ""
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]: input.value });
      
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(data);
      try {
          const url =BASE_URL+End_Points.LOGIN_USER ;
          console.log(url);
          const response = await axios.post(url, data);
          localStorage.setItem("token", response.data.token);
          window.location = "/"; // Redirecting to the home page
      } catch (error) {
          if (error.response && error.response.status >= 400 && error.response.status <= 500) {
              setError(error.response.data.message||"An error occurred during login");
          }
      }
  }



    return (
      <div className="w-full relative bg-bg overflow-hidden flex flex-col items-start justify-start gap-[140px] tracking-[normal] mq750:gap-[70px_140px] mq450:gap-[35px_140px]">
        <section className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full text-left text-sm text-text font-title-16px-regular mq750:gap-[24px_48px]">
          <div className="self-stretch bg-button overflow-hidden flex flex-row items-start justify-end pt-3 px-[136px] pb-1 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="w-[78px] flex flex-row items-start justify-start gap-[231px]">
              <div className="hidden flex-row items-center justify-start gap-[8px] max-w-full mq1050:flex-wrap">
                <div className="h-[18px] w-[474px] relative leading-[21px] inline-block shrink-0 max-w-full">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!
                </div>
                <div className="relative [text-decoration:underline] leading-[24px] font-semibold text-center">
                  ShopNow
                </div>
              </div>
              <FormControl
                className="h-6 flex-1 font-title-16px-regular text-sm text-text"
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
          </div>
          <FrameComponent />
          <div className="w-[1384px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border gap-[129px] max-w-full lg:flex-wrap lg:gap-[129px_64px] mq750:gap-[129px_32px] mq450:gap-[129px_16px]">
            <img
              className="h-[781px] flex-1 relative rounded-tl-none rounded-tr rounded-br rounded-bl-none max-w-full overflow-hidden object-cover min-w-[523px] mq750:min-w-full"
              loading="lazy"
              alt=""
              src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711337388/Side_Image_in21s6.png"
            />
            <form className="m-0 flex flex-col items-start justify-start py-5 px-0 box-border gap-[40px] min-w-[430px] max-w-full lg:flex-1 mq750:min-w-full mq450:gap-[20px_40px]">
              <div className="flex flex-col items-start justify-start gap-[48px] max-w-full mq450:gap-[24px_48px]">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <h1 className="m-0 relative text-17xl tracking-[0.04em] leading-[30px] font-medium font-heading-24px-bold text-button text-left mq450:text-[22px] mq450:leading-[18px] mq1050:text-[29px] mq1050:leading-[24px]">
                    Log in to Bhakshanagal
                  </h1>
                  <div className="relative text-base leading-[24px] font-title-16px-regular text-button text-left">
                    Enter your details below
                  </div>
                </div>
                <div className="w-[370px] flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px_40px]">
                <div className="self-stretch h-8 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px]">
                <TextField  id="email" label="Email or Phone Number" name="email" variant="standard" onChange={handleChange}/>
      <hr className="border-gray-300 w-full mt-1 mb-2" />
    </div>
                  <div className="self-stretch h-8 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px]">
      <TextField  id="password" label="Password"  name='password' variant="standard" onChange={handleChange} />
      <hr className="border-gray-300 w-full mt-1 mb-2" />
    </div>
                </div>
              </div>
              <div className="w-[371px] flex flex-row items-center justify-between max-w-full gap-[20px] mq450:flex-wrap">
                <Button
                  className="h-14 w-[143px]"
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fafafa",
                    fontSize: "16",
                    background: "#db4444",
                    borderRadius: "0px 0px 0px 0px",
                    "&:hover": { background: "#db4444" },
                    width: 143,
                    height: 56,
                  }}
                  onClick={handleSubmit}
                >
                  Log In
                </Button>
                <div className="relative text-base leading-[24px] font-title-16px-regular text-secondary-2 text-left">
                  Forget Password?
                </div>
              </div>
            </form>
          </div>
        </section>
        
        <div className="w-32 h-[27px] !m-[0] absolute top-[85px] left-[50px] flex flex-row flex-wrap items-start justify-start z-[1]">
    <img
        className="h-[60px] w-[99px] absolute !m-[0] top-[calc(50%_-_25px)] left-[calc(50%_-_50px)] object-cover"
        loading="lazy"
        alt=""
        src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711122599/64480603-8980-4278-bb9a-5b2ffdb5925e_1711116791789477156_hlyhro.png"
    />
</div>

        <Footer />
        </div>
    )}