import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constant/endpoint';
import End_Points from '../../constant/endpoint';
import {userRegistrationValidationSchema} from '../../validation/userValidation'
import {
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    InputAdornment,
    Button,
    TextField
  } from "@mui/material";
  
  
  import { SignupFrameComponent } from "./SignupFrameComponent";
  import { Footer } from "../Footer/Footer";
  
   const SignUp = () => {

    const [data,setData] =useState({
      username:"",
      email:"",
      password:""
  });
  console.log(data);
  const [error,setError] = useState("")
  const navigate = useNavigate()
  const handleChange =({currentTarget:input})=>{
    setData({...data,[input.name]:input.value})
    
        }

  const handleSubmit =async(e)=>{
    console.log(e);
    e.preventDefault()
    try{
      await userRegistrationValidationSchema.validate(data, { abortEarly: false });

      const url= BASE_URL+End_Points.LOGIN_USER
      const {data:res} =await axios.post(url,data)
      
      navigate("/login")
      console.log(res.message);
    }catch(error){
if(error.response && error.response.status>=400 && error.response.status<=500){
setError(error.response.data.message)
}
    }
}
    return (
      <div className="w-full relative bg-primary overflow-hidden flex flex-col items-start justify-start gap-[140px] tracking-[normal] text-center text-base text-button font-title-16px-regular mq450:gap-[35px_140px] mq750:gap-[70px_140px]">
        <div className="w-12 h-6 relative hidden">
          <div className="absolute top-[0%] left-[0%] leading-[24px] hidden w-full h-full">
            About
          </div>
        </div>
        <section className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full text-left text-sm text-text font-title-16px-regular mq750:gap-[22px_45px]">
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
          <SignupFrameComponent />
          <div className="w-[1325px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border gap-[129px] max-w-full text-17xl text-button font-heading-24px-bold lg:gap-[129px_64px] mq450:gap-[129px_16px] mq750:gap-[129px_32px] mq1050:flex-wrap">
            <img
              className="h-[781px] flex-1 relative rounded-tl-none rounded-tr rounded-br rounded-bl-none max-w-full overflow-hidden object-cover min-w-[523px] mq750:min-w-full"
              loading="lazy"
              alt=""
              src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711122784/5a7e508b-d571-46df-94d0-badf52ae6288_1711116793709442186_fgl5v2.png"
            />
            <div className="w-[371px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[48px] min-w-[371px] max-w-full mq450:gap-[24px_48px] mq450:min-w-full mq1050:flex-1">
              <div className="flex flex-col items-start justify-start gap-[24px] max-w-full">
                <h1 className="m-0 relative text-inherit tracking-[0.04em] leading-[30px] font-medium font-inherit mq450:text-[22px] mq450:leading-[18px] mq1050:text-[29px] mq1050:leading-[24px]">
                  Create an account
                </h1>
                <div className="w-[191px] relative text-base leading-[24px] font-title-16px-regular inline-block">
                  Enter your details below
                </div>
              </div>
              <form  onSubmit={handleSubmit}  className="m-0 self-stretch h-[404px] flex flex-col items-center justify-start gap-[40px] mq450:gap-[20px_40px]">
  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[40px] mq450:gap-[20px_40px]">
    <div className="self-stretch h-8 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px]">
      <TextField id="name" name="username" label="Name" variant="standard"   onChange={handleChange}
 />
    </div>
    <div className="self-stretch h-8 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px]">
      <TextField id="email" label="Email or Phone Number" name='email' variant="standard"    onChange={handleChange} // Add this line
/>
    </div>
    <div className="self-stretch h-8 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px]">
      <TextField id="password" label="Password" name='password' variant="standard"   onChange={handleChange} // Add this line
 />
    </div>
  </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
                  <Button
                    type="submit"
                    className="self-stretch h-14 mq450:pl-5 mq450:pr-5 mq450:box-border"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fafafa",
                      fontSize: "16",
                      background: "#db4444",
                      borderRadius: "4px",
                      "&:hover": { background: "#db4444" },
                      height: 56,
                    }}
                    onClick={handleSubmit}
                  >
                    Create Account
                  </Button>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[32px] mq450:gap-[16px_32px]">
                    <Button
                      className="self-stretch flex-1 mq450:pl-5 mq450:pr-5 mq450:box-border"
                      startIcon={
                        <img width="24px" height="24px" src="/icongoogle.svg" />
                      }
                      disableElevation={true}
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        color: "#000",
                        fontSize: "16",
                        borderColor: "rgba(0, 0, 0, 0.4)",
                        borderRadius: "4px",
                        "&:hover": { borderColor: "rgba(0, 0, 0, 0.4)" },
                      }}
                    >
                      Sign up with Google
                    </Button>
                    <div className="flex flex-row items-center justify-start gap-[16px]">
                      <div className="relative text-base leading-[24px] font-title-16px-regular text-gray-300 text-left">
                        Already have account?
                      </div>
                      <button className="cursor-pointer [border:none] pt-0 px-0 pb-0 bg-[transparent] h-7 flex flex-col items-start justify-start box-border gap-[4px]">
                        <div className="relative text-base leading-[24px] font-medium font-title-16px-regular text-gray-300 text-left inline-block min-w-[47px] whitespace-nowrap">
                          Log in
                        </div>
                        <img
                          className="w-[47px] h-px relative"
                          alt=""
                          src="/underline-4.svg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )}
     export  default SignUp