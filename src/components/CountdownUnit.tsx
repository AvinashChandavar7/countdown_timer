/* eslint-disable react-refresh/only-export-components */
import React from 'react';

interface CountdownUnitProps {
  value: number;
  label: string;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center text-2xl font-bold text-center rounded-3xl bg-gradient-to-tr from-fuchsia-500 to-sky-400 w-36 h-36 ">
      <h1 className='text-4xl text-purple-200'>{value || 0}</h1>
      <h1 className='text-3xl text-blue-200'>{label}</h1>
    </div>
  );
};

// export default CountdownUnit;
export default React.memo(CountdownUnit)


{/* <h1 className='text-[#DCD6F7] text-4xl'>{value || 0}</h1>
      <h1 className='text-[#A5B1E0] text-3xl'>{label}</h1> */}