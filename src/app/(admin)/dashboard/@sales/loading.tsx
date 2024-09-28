'use client';
import React from 'react';
import { Bars } from 'react-loader-spinner';

export interface LoadingProps {}

export default function Loading({}: LoadingProps) {
  return (
    <div className="flex items-center justify-center pt-24">
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
