import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <div className="bg-[#20232a] flex justify-center h-[74px]">
      <Container>
        <div className="flex text-white items-center h-full w-full justify-between">
          <div className="flex justify-center items-center h-full">
            <a href="/" className="flex cursor-pointer">
              <div className="text-[32px] material-symbols-outlined mr-2">
                school
              </div>
              <div className="text-2xl font-extrabold">Self-Learning</div>
            </a>

            <div className="flex pl-12 h-full">
              <div className="flex flex-col justify-center px-4 bg-[#111419] h-full text-[#FAC850] hover:text-[#61dafb]">
                <a href="/toeic">TOEIC</a>
              </div>
              <div className="flex flex-col justify-center px-4 h-full hover:text-[#61dafb]">
                <a href="/toeic">IPA</a>
              </div>
              <div className="flex flex-col justify-center px-4 h-full hover:text-[#61dafb]">
                <a href="/technical">Technical</a>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <a href="/profile">
              <div className=" text-[14px] border-b-2 border-yellow-300 pb-[2px]">
                Hoang Nhut
              </div>
            </a>

            <div className="material-symbols-outlined text-2xl">
              account_circle
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
