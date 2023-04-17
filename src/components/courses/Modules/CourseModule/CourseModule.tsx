import React from "react";
import DownArrow from "../../icon/DownArrow";
import * as Accordion from "@radix-ui/react-accordion";
import { styled, keyframes } from "@stitches/react";
import Topic from "../Topics/Topic";
import Topics from "../Topics/Topics";

const CourseModule = ({ num, topic, description }) => {
  return (
    <AccordionRoot type="single" defaultValue="item-1" collapsible>
      <div className="py-4 border px-5 shadow-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="rounded flex  gap-9  w-full">
              <div className="w-1/4  text-4xl font-semibold flex justify-center items-center text-[#0D3B66]">
                Module{" "}
                <span className="underline decoration-[#01BAEF] ml-1">
                  {num}
                </span>
              </div>
              <div className="w-full items-center  flex gap-3 justify-between ">
                <div>
                  <div className="font-semibold text-4xl text-[#0D3B66]">
                    {topic}
                  </div>
                  <div className="text-sm text-start">{description}</div>
                </div>
                <div className="cursor">
                  <DownArrow w="32" fill="#01BAEF" />
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Topics />
          </AccordionContent>
        </AccordionItem>
      </div>
    </AccordionRoot>
  );
};

const AccordionRoot = styled(Accordion.Root, {
  border: "none",
});

const AccordionItem = styled(Accordion.Item, {
  border: "none",

  "&:first-child": {
    marginTop: 0,
    // borderTopLeftRadius: 4,
    // borderTopRightRadius: 4,
  },

  "&:last-child": {
    // borderBottomLeftRadius: 4,
    // borderBottomRightRadius: 4,
  },

  "&:focus-within": {
    // position: 'relative',
    zIndex: 1,
  },
});

const AccordionTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        {/* <StyledChevron aria-hidden /> */}
      </StyledTrigger>
    </StyledHeader>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  )
);

const StyledHeader = styled(Accordion.Header, {
  // display: 'flex',
  border: "none",
});

const StyledTrigger = styled(Accordion.Trigger, {
  // all: 'unset',
  fontFamily: "inherit",
  width: "100%",
  backgroundColor: "transparent",
  // padding: '0 20px',
  // height: 45,
  // flex: 1,
  // display: 'flex',
  alignItems: "center",
  justifyContent: "space-between",
  // fontSize: 15,
  // lineHeight: 1,
});

const StyledChevron = styled(DownArrow, {
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledContent = styled(Accordion.Content, {
  overflow: "hidden",
  fontSize: 15,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled("div", {
  padding: "0px",
});

export default CourseModule;
