import React from 'react';

interface CountdownUnitProps {
  value: number;
  label: string;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => {
  return (
    <div className="text-2xl rounded-3xl bg-gradient-to-tr from-fuchsia-500 to-sky-400  font-bold flex flex-col items-center justify-center w-36 h-36 text-center ">
      <h1 className='text-[#DCD6F7] text-4xl'>{value || 0}</h1>
      <h1 className='text-[#A5B1E0] text-3xl'>{label}</h1>
    </div>
  );
};

// export default CountdownUnit;
export default React.memo(CountdownUnit)