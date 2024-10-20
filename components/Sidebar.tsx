"use client";
import React, { useState } from 'react';
import SidebarButton from './SidebarButton';
import { Home, User, ChartPie, ArrowBigLeftDash } from 'lucide-react';
import Button from './Button';

export default function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <div
      className={`bg-primary rounded-r-xl h-full text-white flex flex-col justify-between ${
        isMinimized ? 'w-20' : 'w-64'
      } transition-all duration-300`}
    >
      {/* Top Section */}
      <div>
        {/* <div
          className={`top flex items-center pt-6 mb-12 ${
            isMinimized ? 'justify-center' : 'pl-6'
          }`}
        >
          {isMinimized ? <LogoSmall /> : <Logo />}
        </div> */}
        <ul>
          <li>
            <SidebarButton
              path="/dashboard"
              icon={<Home size={16} />}
              isMinimized={isMinimized}
            >
              Overview
            </SidebarButton>
          </li>
          <li>
            <SidebarButton
              path="/customers"
              icon={<User size={16} />}
              isMinimized={isMinimized}
            >
              Customers
            </SidebarButton>
          </li>
          <li>
            <SidebarButton
              path="/visits"
              icon={<ChartPie size={16} />}
              isMinimized={isMinimized}
            >
              Visits
            </SidebarButton>
          </li>
          
        </ul>
      </div>
      {/* Bottom Section */}
      <div className="mb-6">
        <Button
          onClick={() => setIsMinimized(!isMinimized)}
          className={`w-full flex justify-start pl-6 text-gray-300 hover:text-white`}
        >
				  <ArrowBigLeftDash className={ `${isMinimized && 'rotate-180'}`} />
        </Button>
      </div>
    </div>
  );
}
