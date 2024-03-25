'use client'

import React from "react";
import { usePathname } from 'next/navigation'
import Container from "./Container";
import classNames from "classnames";

interface IHeaderItem {
  label: string;
  href: string;
  isSelected: boolean;
}
const Header = () => {
  const pathname = usePathname();

  const headerItems: IHeaderItem[] = [
    // { label: "TOEIC",  href: "/toeic", isSelected: pathname == "/toeic" },
    // { label: "IPA", href: "/ipa", isSelected: pathname == "/ipa" },
    // { label: "Technical", href: "/technical", isSelected: pathname == "/technical" },
  ];

  return (
    <div className="bg-[#20232a] flex justify-center h-[74px]">
      <Container>
        <div className="flex text-white items-center h-full w-full justify-between">
          <div className="flex justify-center items-center h-full font-light	">
            <a href="/" className="flex cursor-pointer">
              <div className="text-[32px] material-symbols-outlined mr-2">
                school
              </div>
              <div className="text-2xl font-extrabold whitespace-nowrap">Self-Learning</div>
            </a>

            <div className="flex pl-12 h-full mr-4">
              {headerItems.map((item, index) => {
                const itemClass = classNames({
                  "flex flex-col justify-center px-4 h-full hover:text-[#61dafb] cursor-pointer": true,
                  "bg-[#111419] text-[#FAC850]": item.isSelected,
                });
                return (
                  <div  key={index} className={itemClass}>
                    <a href={item.href}>{item.label}</a>
                  </div>
                );
              })}
            </div>
            <div className="flex">
              <a
                className="py-[3px] px-[8px] border-2 border-[#61dafb] rounded hover:bg-[#61dafb] hover:text-black cursor-pointer"
                href="/practice"
              >
                <div>Practices</div>
              </a>
            </div>
          </div>

          {/* <div className="flex gap-2">
            <a href="/profile">
              <div className=" text-[14px] border-b-2 border-yellow-300 pb-[2px] whitespace-nowrap">
                Hoang Nhut
              </div>
            </a>

            <div className="material-symbols-outlined text-2xl cursor-pointer">
              account_circle
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Header;
