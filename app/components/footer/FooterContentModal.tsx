"use client";
import { FC } from "react";

const FooterContentModal: FC = (): JSX.Element => {
  return (
    <div
      className="
                flex 
                flex-col 
                lg:px-20
                md:flex-col 
                md:items-start 
                md:justify-between 
                md:px-14 
                xl:px-40
                lg:flex-row
                "
    >
      {/*ATTENDANCE h-72 bg-pink-300*/}
      <ColumnContainer height={72}>
        <ColumnTitle title="Attendace" />
        <ColumnLink link=" Help Center" />
        <ColumnLink link="AirCover" />
        <ColumnLink link="Support for people with disabilities" />
        <ColumnLink link="Cancellation Options" />
        <ColumnLink link="Our response to COVID-19" />
        <ColumnLink link="Report a problem in the neighborhood" />
      </ColumnContainer>
      {/*COMMUNITY h-32 bg-lime-300 */}
      <hr />
      <ColumnContainer height={32}>
        <ColumnTitle title="Community" />
        <ColumnLink link="Airbnb.org: Disaster Relief Housing" />
        <ColumnLink link="We fight against discrimination" />
      </ColumnContainer>
      {/*HOST MODE h-60 bg-sky-300*/}
      <hr />
      <ColumnContainer height={60}>
        <ColumnTitle title="Host mode" />
        <ColumnLink link="List your space on Airbnb" />
        <ColumnLink link="AirCover for hosts" />
        <ColumnLink link="Host Resources" />
        <ColumnLink link="Visit the community forum" />
        <ColumnLink link="How to provide hosting services responsibly" />
      </ColumnContainer>
      {/* AIRBNB h-60 bg-teal-300*/}
      <hr />
      <ColumnContainer height={60}>
        <ColumnTitle title="Airbnb" />
        <ColumnLink link="Press room" />
        <ColumnLink link="Learn more about the new features" />
        <ColumnLink link="Letter from our founders" />
        <ColumnLink link="Careers" />
        <ColumnLink link="Investors" />
      </ColumnContainer>
    </div>
  );
};

const ColumnTitle: FC<{ title: string }> = ({ title }): JSX.Element => {
  return (
    <h3
      className="
                font-semibold 
                lg:pb-1
                md:text-sm 
                text-lg 
                "
    >
      {title}
    </h3>
  );
};

const ColumnLink: FC<{ address?: string; link: string }> = ({
  link,
  address = "#",
}): JSX.Element => {
  return (
    <a
      href={address}
      className="
                active:underline 
                cursor-pointer 
                hover:underline 
                md:font-light 
                md:text-sm"
    >
      {link}
    </a>
  );
};

const ColumnContainer: FC<{
  children: JSX.Element | JSX.Element[];
  height: number;
  bgBackground?: string;
}> = ({ children, height, bgBackground }): JSX.Element => {
  return (
    <div
      className={`
                ${bgBackground ? bgBackground : ""}
                ${height > 0 ? "h-" + height : ""}
                flex
                flex-col 
                gap-y-2
                items-start
                justify-center
                lg:w-96
                md:gap-y-4
                lg:h-72
                md:justify-start
                md:w-72
                xl:w-[416px]
                md:grid
                md:col-span-3
                lg:flex
                `}
    >
      {children}
    </div>
  );
};

export { FooterContentModal };
