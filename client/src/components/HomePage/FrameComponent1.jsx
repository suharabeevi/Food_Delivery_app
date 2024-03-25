import  UserInterface  from "../HomePage/UserInterface"

const FrameComponent1 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[132px] box-border max-w-full text-left text-5xl text-text font-title-16px-regular mq450:pb-14 mq450:box-border mq1050:pb-[86px] mq1050:box-border">
      <div className="w-[1170px] flex flex-col items-start justify-start gap-[60px] max-w-full lg:gap-[30px_60px]">
        <UserInterface
          todays="Featured"
          flashSales="New Arrival"
          propGap="20px"
          propMinWidth="unset"
          propMinWidth1="74px"
        />
        <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full mq1050:flex-wrap">
          <div className="flex-[0.8982] rounded bg-button overflow-hidden flex flex-row items-end justify-start py-0 px-[29px] box-border min-w-[370px] min-h-[600px] max-w-full mq450:min-w-full mq1050:flex-1 mq1050:min-h-[auto]">
            <div className="flex-1 flex flex-col items-start justify-end pt-[357px] px-[3px] pb-[31px] box-border gap-[16px] bg-[url('')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[232px] mq750:pb-5 mq750:box-border">
              <img
                className="self-stretch h-[511px] relative max-w-full overflow-hidden shrink-0 object-cover "
                alt=""
                src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388739/ps5-slim-goedkope-playstation_large_1_pngkee.png"
              />
              <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-heading-24px-bold z-[1] mq450:text-lgi mq450:leading-[19px]">{`Potato Chilly `}</h3>
              <div className="w-[242px] relative text-sm leading-[21px] inline-block z-[1]">
                Feel the spicy of kerala coming out on sale.
              </div>
              <div className="w-[81px] h-[25px] flex flex-col items-start justify-start text-base text-bg">
                <div className="relative leading-[24px] font-medium inline-block min-w-[81px] z-[1]">
                  Shop Now
                </div>
                <img
                  className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/underline.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[370px] max-w-full mq450:min-w-full mq750:gap-[16px_32px] mq1050:flex-1">
            <div className="self-stretch h-[284px] relative rounded bg-gray-100 overflow-hidden shrink-0">
              <img
                className="absolute top-[30px] right-[0px] w-[402.7px] h-[225px] object-contain"
                loading="lazy"
                alt=""
                src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388733/attractive-woman-wearing-hat-posing-black-background_1_weqwlq.png"
              />
              <h3 className="m-0 absolute top-[138px] left-[24px] text-inherit tracking-[0.03em] leading-[24px] font-semibold font-heading-24px-bold whitespace-pre-wrap z-[1] mq450:text-lgi mq450:leading-[19px]">
                Vishu Sweets
              </h3>
              <div className="absolute top-[178px] left-[24px] text-sm leading-[21px] inline-block w-[255px] z-[1]">
                Featured Sweets collections that give you another vibe.
              </div>
              <div className="absolute top-[236px] left-[24px] w-[81px] h-[25px] flex flex-col items-start justify-start text-base text-bg">
                <div className="relative leading-[24px] font-medium inline-block min-w-[81px]">
                  Shop Now
                </div>
                <img
                  className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                  alt=""
                  src="/underline-1.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[30px] mq750:flex-wrap">
              <div className="flex-1 rounded bg-button overflow-hidden flex flex-col items-start justify-end py-[23px] px-6 box-border gap-[8px] min-w-[211px] min-h-[284px] mq750:min-h-[auto]">
                <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-heading-24px-bold z-[2] mq450:text-lgi mq450:leading-[19px]">
                  Bhashanagal
                </h3>
                <div className="flex flex-row items-start justify-start relative text-sm">
                  <div className="w-[210px] !m-[0] absolute top-[-176px] right-[-25px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 px-[7px] pb-px box-border z-[1]">
                    <div className="h-[221px] flex-1 relative">
                      <div className="absolute top-[13px] left-[0px] w-[196px] h-[196px] flex items-center justify-center">
                        <img
                          className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(4.061)]"
                          alt=""
                          src="/ellipse-24.svg"
                        />
                      </div>
                      <img
                        className="absolute w-[calc(100%_-_6px)] top-[0px] right-[3px] left-[3px] max-w-full overflow-hidden h-[221px] object-cover"
                        loading="lazy"
                        alt=""
                        src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388732/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png_1_k0kywp.png"
                      />
                    </div>
                  </div>
                  <div className="relative leading-[21px] z-[2]">
                    jaaakk k wireless speakers
                  </div>
                </div>
                <div className="w-[81px] h-[25px] flex flex-col items-start justify-start text-base text-bg">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[81px] z-[2]">
                    Shop Now
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/underline-2.svg"
                  />
                </div>
              </div>
              <div className="flex-1 rounded bg-button overflow-hidden flex flex-col items-start justify-end py-[23px] px-6 box-border relative gap-[8px] min-w-[211px] min-h-[284px]">
                <div className="w-[210px] !m-[0] absolute top-[30px] left-[30px] flex flex-row items-start justify-start">
                  <div className="h-[238px] w-[238px] absolute !m-[0] bottom-[-9px] left-[calc(50%_-_119px)] flex items-center justify-center z-[0]">
                    <img
                      className="h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(3.521)]"
                      alt=""
                      src="/ellipse-24-1.svg"
                    />
                  </div>
                  <div className="h-[222px] flex-1 relative overflow-hidden z-[1]">
                    <img
                      className="absolute w-[calc(100%_-_9px)] top-[calc(50%_-_103px)] right-[5px] left-[4px] max-w-full overflow-hidden h-[203px] object-cover"
                      loading="lazy"
                      alt=""
                      src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388731/652e82cd70aa6522dd785109a455904c_hijylk.png"
                    />
                  </div>
                </div>
                <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-heading-24px-bold z-[2] mq450:text-lgi mq450:leading-[19px]">
                  Cool Drinks
                </h3>
                <div className="w-[191px] relative text-sm leading-[21px] inline-block z-[2]">
                  Feel Cool
                </div>
                <div className="w-[81px] h-[25px] flex flex-col items-start justify-start text-base text-bg">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[81px] z-[2]">
                    Shop Now
                  </div>
                  <img
                    className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/underline-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );}
export default FrameComponent1