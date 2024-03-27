const AccountDropdown = () => {
    return (
      <div className="absolute top-[92px] left-[995px] rounded bg-gray-300 [backdrop-filter:blur(150px)] w-56 h-[250px] overflow-hidden flex flex-col items-start justify-start pt-[18px] px-[19px] pb-[9px] box-border gap-[8px] z-[4] text-center text-sm text-text font-title-16px-regular">
        <div className="self-stretch h-[37px] flex flex-row items-start justify-start pt-0 px-px pb-[5px] box-border">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711523082/user_wmhddx.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
              <div className="cursor-pointer self-stretch relative leading-[21px]">
                Manage My Account
              </div>
            </div>
          </div>
        </div>
        <div className="w-[123px] flex-1 flex flex-row items-start justify-start py-0 px-px box-border">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[13px]">
            <div className="w-[101px] h-6 flex flex-row items-start justify-start gap-[13px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711523082/icon-mallbag_ok7lqv.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <div className="cursor-pointer self-stretch relative leading-[21px] inline-block min-w-[64px]">
                  My Order
                </div>
              </div>
            </div>
            <div className="self-stretch h-6 flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-6 w-7 relative object-cover min-h-[24px]"
                alt=""
                src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711523082/Mask_group_xv5jtm.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <div className="cursor-pointer self-stretch relative leading-[21px] inline-block min-w-[80px]">
                  Notification
                </div>
              </div>
            </div>
            <div className="self-stretch h-6 flex flex-row items-start justify-start gap-[16px] text-left">
              <img
                className="h-6 w-7 relative object-cover min-h-[24px]"
                alt=""
                src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711523082/Icon-Reviews_ur6kiz.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <div className="cursor-pointer self-stretch relative leading-[21px]">
                  Whishlist
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[10px] text-left">
              <img
                className="h-[35px] w-[34.2px] relative object-cover"
                loading="lazy"
                alt=""
                src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711523486/Frame_1000005949_tmpkvf.png"
              />
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <div className="cursor-pointer relative leading-[21px] inline-block min-w-[75.2px]">
                  Offer Zone
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6 h-6 hidden" />
        <div className="w-[108px] h-6 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[16px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px] z-[1]"
            alt=""
            src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711523740/Icon-logout_rtprfu.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
            <div className="cursor-pointer self-stretch relative leading-[21px] inline-block min-w-[48px]">
              Logout
            </div>
          </div>
        </div>
      </div>
    );}
     export default AccountDropdown