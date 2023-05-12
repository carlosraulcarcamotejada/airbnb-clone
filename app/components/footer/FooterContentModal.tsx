"use client";
import { FC } from "react";

const FooterContentModal: FC = (): JSX.Element => {
  return (
    <ContainerFooterModal>
      <ColumnContainer height={72}>
        <ColumnTitle title="Attendace" />
        <ColumnLinkContainer>
          <ColumnLink link=" Help Center" />
          <ColumnLink link="AirCover" />
          <ColumnLink link="Support for people with disabilities" />
          <ColumnLink link="Cancellation Options" />
          <ColumnLink link="Our response to COVID-19" />
          <ColumnLink link="Report a problem in the neighborhood" />
        </ColumnLinkContainer>
        <hr className="w-full xl:hidden" />
      </ColumnContainer>
      <ColumnContainer height={28}>
        <ColumnTitle title="Community" />
        <ColumnLinkContainer>
          <ColumnLink link="Airbnb.org: Disaster Relief Housing" />
          <ColumnLink link="We fight against discrimination" />
        </ColumnLinkContainer>
        <hr className="w-full xl:hidden" />
      </ColumnContainer>
      <ColumnContainer height={60}>
        <ColumnTitle title="Host mode" />
        <ColumnLinkContainer>
          <ColumnLink link="List your space on Airbnb" />
          <ColumnLink link="AirCover for hosts" />
          <ColumnLink link="Host Resources" />
          <ColumnLink link="Visit the community forum" />
          <ColumnLink link="How to provide hosting services responsibly" />
        </ColumnLinkContainer>
        <hr className="w-full xl:hidden" />
      </ColumnContainer>
      <ColumnContainer height={60}>
        <ColumnTitle title="Airbnb" />
        <ColumnLinkContainer>
          <ColumnLink link="Press room" />
          <ColumnLink link="Learn more about the new features" />
          <ColumnLink link="Letter from our founders" />
          <ColumnLink link="Careers" />
          <ColumnLink link="Investors" />
        </ColumnLinkContainer>
      </ColumnContainer>
    </ContainerFooterModal>
  );
};

const ContainerFooterModal: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}): JSX.Element => {
  return (
    <div
      className="
                flex 
                flex-col
                py-2
                gap-y-2
                md:gap-0
                md:flex-col 
                md:items-start 
                md:justify-start 
                md:px-6
                xl:flex-row
                xl:px-20
                "
    >
      {children}
    </div>
  );
};

const ColumnTitle: FC<{ title: string }> = ({ title }): JSX.Element => {
  return <h3 className="font-semibold text-sm lg:pb-1">{title}</h3>;
};

const ColumnLink: FC<{ address?: string; link: string }> = ({
  link,
  address = "#",
}): JSX.Element => {
  return (
    <a
      className="
                active:opacity-60
                active:underline
                cursor-pointer 
                hover:underline 
                text-sm
                md:col-span-1
                md:font-light 
                md:h-10
      "
      href={address}
    >
      {link}
    </a>
  );
};

const ColumnLinkContainer: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}): JSX.Element => {
  return (
    <div
      className="
                flex 
                flex-col
                gap-y-3
                md:gap-y-1
                md:grid 
                md:grid-cols-3
                md:grid-rows-2 
                md:justify-between
                md:w-full
                xl:flex
                xl:flex-col
                xl:gap-y-0
                "
    >
      {children}
    </div>
  );
};

const ColumnContainer: FC<{
  children: JSX.Element | JSX.Element[];
  height: number;
}> = ({ children, height }): JSX.Element => {
  return (
    <div
      className={`
                ${height > 0 ? "h-" + height : ""}
                flex
                flex-col 
                gap-y-4
                items-start
                justify-center       
                md:gap-y-4
                md:grid-rows-2
                md:h-40
                md:justify-start
                md:w-full
                xl:flex
                xl:h-72
                xl:justify-start
                xl:w-[416px]
                `}
    >
      {children}
    </div>
  );
};

export { FooterContentModal };
