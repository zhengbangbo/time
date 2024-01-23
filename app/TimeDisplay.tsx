"use client";

import React, { useState, useEffect } from 'react';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc)

const utcTime = (offset: number) => {
  if (offset > 0) {
    return dayjs().utc().add(offset, "hour")
  }
  return dayjs().utc().subtract(Math.abs(offset), "hour")
}

const TimeDisplay = ({name, offset}: {name: string; offset: number}) => {
  const [currentTime, setCurrentTime] = useState(utcTime(offset));

  useEffect(() => {
    // 在组件挂载时设置初始时间
    const timerId = setInterval(() => {
      setCurrentTime(utcTime(offset));
    }, 1000);

    // 在组件卸载时清除定时器
    return () => clearInterval(timerId);
  }, []); // 空数组表示仅在挂载和卸载时运行


  const formattedTime = currentTime.format("HH:mm:ss")

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-2xl font-bold text-blue-500">{name}</div>
      <div className="text-4xl font-bold">{ formattedTime }</div>
    </div>
  );
};

export default TimeDisplay;
