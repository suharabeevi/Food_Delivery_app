import { useMemo } from "react";

 const FrameComponent4 = ({
  aK900WiredKeyboard,
  bagOfWords,
  tfIdf,
  randomForest,
  decisionTree,
  gradientBoosting,
  xGBoost,
  lightGBM,
  catBoost,
  propPadding,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propBorderRadius,
  propOverflow,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const aK900WiredKeyboardStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const bagOfWordsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const tfIdfStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const lightGBMStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      overflow: propOverflow,
    };
  }, [propBorderRadius, propOverflow]);

  return (
    <div
      className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[8px] text-left text-base text-button font-title-16px-regular"
      style={frameDivStyle}
    >
      <div
        className="relative leading-[24px] font-medium"
        style={aK900WiredKeyboardStyle}
      >
        {aK900WiredKeyboard}
      </div>
      <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
        <div
          className="relative leading-[24px] font-medium inline-block min-w-[42px] whitespace-nowrap"
          style={bagOfWordsStyle}
        >
          {bagOfWords}
        </div>
        <div
          className="relative [text-decoration:line-through] leading-[24px] font-medium text-gray-500 inline-block min-w-[43px] whitespace-nowrap"
          style={tfIdfStyle}
        >
          {tfIdf}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-gray-500">
        <div className="h-5 flex flex-row items-start justify-start">
          <img
            className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
            alt=""
            src={randomForest}
          />
          <img
            className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
            alt=""
            src={decisionTree}
          />
          <img
            className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
            alt=""
            src={gradientBoosting}
          />
          <img
            className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
            alt=""
            src={xGBoost}
          />
          <img
            className="h-5 w-5 relative rounded-11xs-4 min-h-[20px]"
            alt=""
            src={lightGBM}
            style={lightGBMStyle}
          />
        </div>
        <div className="relative leading-[21px] font-semibold inline-block min-w-[32px]">
          {catBoost}
        </div>
      </div>
    </div>
  );}

  export default FrameComponent4