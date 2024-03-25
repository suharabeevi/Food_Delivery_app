import { useMemo } from "react";

 const NeuralNetwork = ({
  fillHeart,
  fillEye,
  samMoghadamKhamsehKvmdsTr,
  vector,
  vector1,
  vector2,
  vector3,
  starHalfFilled,
  g922500x5003,
  fillEyeIcon,
  samMoghadamKhamsehKvmdsTr1,
  propFlex,
  propHeight,
  propAlignSelf,
  propPadding,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameDiv2Style = useMemo(() => {
    return {
      height: propHeight,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propAlignSelf]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="h-[350px] w-[270px] relative shrink-0 [debug_commit:f6aba90] text-left text-base text-button font-title-16px-regular">
      <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[16px] h-full">
        <div
          className="self-stretch rounded bg-secondary overflow-hidden flex flex-row items-start justify-between pt-3 px-3 pb-[204px] gap-[20px]"
          style={frameDiv1Style}
        >
          <button className="cursor-pointer [border:none] py-1 px-3 bg-secondary-2 rounded flex flex-row items-start justify-start hover:bg-salmon">
            <div className="relative text-xs leading-[18px] font-title-16px-regular text-text text-left inline-block min-w-[31px]">
              -25%
            </div>
          </button>
          <div
            className="h-[34px] flex flex-col items-start justify-start gap-[8px]"
            style={frameDiv2Style}
          >
            <img
              className="w-[34px] h-[34px] relative"
              alt=""
              src={fillHeart}
            />
            {!fillEyeIcon && (
              <img
                className="w-[34px] h-[34px] relative hidden"
                alt=""
                src={fillEye}
              />
            )}
          </div>
          <div className="h-[180px] w-[190px] relative overflow-hidden shrink-0 hidden">
            {!samMoghadamKhamsehKvmdsTr1 && (
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[41px] max-h-full w-[107px] object-cover hidden"
                alt=""
                src={samMoghadamKhamsehKvmdsTr}
              />
            )}
          </div>
        </div>
        <div
          className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[8px]"
          style={frameDiv3Style}
        >
          <div className="relative leading-[24px] font-medium">{`S-Series Comfort Chair `}</div>
          <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
            <div className="relative leading-[24px] font-medium inline-block min-w-[40px] whitespace-nowrap">
              $375
            </div>
            <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-500 inline-block min-w-[42px] whitespace-nowrap">
              $400
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
            <div className="h-5 flex flex-row items-start justify-start">
              <img
                className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                alt=""
                src={vector}
              />
              <img
                className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                alt=""
                src={vector1}
              />
              <img
                className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                alt=""
                src={vector2}
              />
              <img
                className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
                alt=""
                src={vector3}
              />
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src={starHalfFilled}
              />
            </div>
            <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
              (99)
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[43px] left-[38px] w-[172px] h-[152px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src={g922500x5003}
      />
    </div>
  );}
  export default NeuralNetwork