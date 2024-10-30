/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import { useTheme } from 'theme/theme-context';

import Button from 'components/core-ui/button/button';

import PusIconLight from 'assets/icons/plus-light.svg?react';
import PusIcon from 'assets/icons/plus.svg?react';
import ReloadIconLight from 'assets/icons/reload-light.svg?react';
import ReloadIcon from 'assets/icons/reload.svg?react';
import ShiftIconLight from 'assets/icons/shift-light.svg?react';
import ShiftIcon from 'assets/icons/shift.svg?react';

// Sample data for the dropdown
const coins = [
  { id: 1, name: 'DAI', icon: 'icon1', subtitle: 'Dai Stablecoin' },
  { id: 2, name: 'WETH', icon: 'icon2', subtitle: 'Wrapped Ether' },
];

const SwapForm = () => {
  const { theme } = useTheme();
  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [amount, setAmount] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleCoinSelect = (coin: any) => {
    setSelectedCoin(coin);
    setDropdownOpen(false);
  };

  const onTabSwitch = (value: number) => {
    setSelectedTab(value);
  };

  return (
    <div className='p-8 w-full max-w-lg mx-auto text-white'>
      <h2 className='text-center md:text-[40px] sm:text-2xl text-xl font-semibold mb-1'>Swap Today!</h2>
      <p className='text-center text-xs font-light mb-6'>across multiple Coins on Agora Dex</p>

      {/* Swap Form */}
      <div className='dark:bg-[#1C2225] rounded-xl shadow-lg p-6 space-y-4 border dark:border-[#3D3D3D] border-[#D1D1D1]'>
        <div className='flex items-center justify-between'>
          <div className='flex-centered gap-2'>
            <Button
              variant='text'
              onClick={() => onTabSwitch(0)}
              className={`${selectedTab === 0 ? 'dark:text-white text-black' : 'text-[#646464]'}`}
            >
              Swap
            </Button>
            <Button
              variant='text'
              onClick={() => onTabSwitch(1)}
              className={`${selectedTab === 1 ? 'dark:text-white text-black' : 'text-[#646464]'}`}
            >
              Limit
            </Button>
          </div>
          <div className='flex-centered gap-2'>
            {theme === 'dark' ? (
              <>
                <ReloadIcon />
                <PusIcon />
                <ShiftIcon />
              </>
            ) : (
              <>
                <ReloadIconLight />
                <PusIconLight />
                <ShiftIconLight />
              </>
            )}
          </div>
        </div>
        {/* "You Pay" Section */}
        <div>
          <label className='block text-gray-400 text-sm mb-2'>You Pay</label>
          <div className='relative'>
            <input
              type='number'
              className='w-full bg-gray-700 text-lg rounded-lg p-3 pr-24 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400'
              placeholder='Enter amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className='absolute inset-y-0 right-0 flex items-center'>
              <button
                className='flex items-center px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none'
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className='text-lg mr-2'>{selectedCoin.icon}</span>
                <span className='text-sm font-semibold'>{selectedCoin.name}</span>
              </button>
              {dropdownOpen && (
                <div className='absolute right-0 w-48 mt-2 bg-gray-700 rounded-lg shadow-lg overflow-hidden z-10'>
                  {coins.map((coin) => (
                    <div
                      key={coin.id}
                      className='flex items-center p-3 cursor-pointer hover:bg-gray-600'
                      onClick={() => handleCoinSelect(coin)}
                    >
                      <span className='mr-3'>{coin.icon}</span>
                      <div>
                        <p className='text-sm font-medium'>{coin.name}</p>
                        <p className='text-xs text-gray-400'>{coin.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* "You Receive" Section */}
        <div>
          <label className='block text-gray-400 text-sm mb-2'>You Receive</label>
          <div className='relative'>
            <input
              type='text'
              readOnly
              className='w-full bg-gray-700 text-lg rounded-lg p-3 pr-24 outline-none text-gray-300'
              value='53816518910.156180'
            />
            <div className='absolute inset-y-0 right-0 flex items-center'>
              <button className='flex items-center px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none'>
                <span className='text-lg mr-2'>icon2</span>
                <span className='text-sm font-semibold'>WETH</span>
              </button>
            </div>
          </div>
        </div>

        {/* Exchange Rate */}
        <p className='text-sm text-gray-400 text-center mt-2'>1 WETH = 3332.025 DAI (~$3,3351.6)</p>

        {/* Fee Section */}
        <p className='text-sm text-gray-400 text-center'>
          Free <span className='text-white'>$13.76</span>
        </p>

        {/* Permission Button */}
        <button className='w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold'>
          Give permission to use DAI
        </button>
      </div>
    </div>
  );
};

export default SwapForm;
