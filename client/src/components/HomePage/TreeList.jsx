 const TreeList = () => {
    return (
      <section className="w-[1280px] flex flex-row items-start justify-center pt-0 px-5 pb-6 box-border max-w-full text-left text-xl text-button font-title-16px-regular">
        <div className="w-[1102px] flex flex-col items-end justify-start gap-[62px] max-w-full lg:gap-[31px_62px] mq750:gap-[15px_62px]">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="w-[943px] flex flex-row items-center justify-between gap-[20px] max-w-full mq1050:flex-wrap">
              <div className="h-[161px] w-[249px] flex flex-col items-center justify-start gap-[24px]">
                <img
                  className="w-20 h-20 relative"
                  loading="lazy"
                  alt=""
                  src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388731/Services_jqc3pa.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                  <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                    FREE AND FAST DELIVERY
                  </div>
                  <div className="self-stretch relative text-sm leading-[21px] text-center">
                    Free delivery for all orders over $140
                  </div>
                </div>
              </div>
              <div className="h-[161px] flex flex-col items-center justify-start py-0 px-[7.5px] box-border gap-[24px]">
                <img
                  className="w-20 h-20 relative"
                  loading="lazy"
                  alt=""
                  src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388731/Services_jqc3pa.png"
                />
                <div className="flex flex-col items-center justify-start gap-[8px]">
                  <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                    24/7 CUSTOMER SERVICE
                  </div>
                  <div className="relative text-sm leading-[21px]">
                    Friendly 24/7 customer support
                  </div>
                </div>
              </div>
              <div className="h-[161px] flex flex-col items-center justify-start gap-[24px]">
                <img
                  className="w-20 h-20 relative"
                  loading="lazy"
                  alt=""
                  src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388731/Services_jqc3pa.png"
                />
                <div className="flex flex-col items-center justify-start gap-[8px]">
                  <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
                    MONEY BACK GUARANTEE
                  </div>
                  <div className="relative text-sm leading-[21px]">
                    We reurn money within 30 days
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-center justify-start gap-[24px]">
                <img
                  className="w-20 h-20 relative"
                  alt=""
                  src="/services-3.svg"
                />
                <div className="w-64 flex flex-col items-center justify-start gap-[8px]">
                  <div className="self-stretch h-7 relative leading-[28px] font-semibold inline-block mq450:text-base mq450:leading-[22px]">
                    MONEY BACK GUARANTEE
                  </div>
                  <div className="h-[21px] relative text-sm leading-[21px] inline-block">
                    We reurn money within 30 days
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[46px] h-[46px] relative object-contain"
            loading="lazy"
            alt=""
            src="/fill-with-up-arrow.svg"
          />
        </div>
      </section>
    )}
    export default TreeList