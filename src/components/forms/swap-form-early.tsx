import React from 'react';

const Icon1 = () => <span>🔄</span>; // Placeholder for swap icon
const Icon2 = () => <span>📈</span>; // Placeholder for currency icon1
const Icon3 = () => <span>💰</span>; // Placeholder for currency icon2

const SwapFormEarly: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800'>
      <div className='text-center mb-6'>
        <h1 className='md:text-[39px] sm:text-2xl text-xl font-semibold text-white'>Swap Today!</h1>
        <p className='text-sm font-light'>across multiple Coins on Agora Dex</p>
      </div>

      <form className='bg-gray-800 rounded-lg shadow-lg w-[400px] p-5 text-white'>
        {/* Tabs */}
        <div className='flex justify-between mb-4'>
          <button type='button' className='text-white font-semibold border-b-2 border-green-500 pb-2'>
            Swap
          </button>
          <button type='button' className='text-gray-400'>
            Limit
          </button>
        </div>

        {/* Swap Details */}
        <div className='bg-gray-900 rounded-md p-4 mb-4'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-sm text-gray-500'>You pay</p>
              <div className='flex items-center gap-2'>
                <Icon2 />
                <h2 className='text-xl font-bold'>DAI</h2>
              </div>
              <p className='text-xs text-gray-500'>Dai Stablecoin</p>
            </div>
            <input
              type='text'
              className='bg-transparent text-right text-lg font-semibold focus:outline-none'
              defaultValue='16546518910.156180'
            />
          </div>
          <p className='text-right text-sm text-gray-500'>Estimated price: $132 155 561</p>
        </div>

        <div className='flex justify-center mb-4'>
          <Icon1 />
        </div>

        <div className='bg-gray-900 rounded-md p-4 mb-4'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-sm text-gray-500'>You Receive</p>
              <div className='flex items-center gap-2'>
                <Icon3 />
                <h2 className='text-xl font-bold'>WETH</h2>
              </div>
              <p className='text-xs text-gray-500'>Wrapped Ether</p>
            </div>
            <input
              type='text'
              className='bg-transparent text-right text-lg font-semibold focus:outline-none'
              defaultValue='53816518910.156180'
            />
          </div>
          <p className='text-right text-sm text-gray-500'>Estimated price: $54 530</p>
        </div>

        {/* Additional Info */}
        <p className='text-gray-400 text-sm mb-4'>1 WETH = 3332.025 DAI (~$3 3351.6)</p>

        <div className='flex justify-between mb-4'>
          <p className='text-gray-400'>Free</p>
          <p className='text-gray-400'>$13.76</p>
        </div>

        {/* Button */}
        <button
          type='submit'
          className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition duration-200'
        >
          Give permission to use DAI
        </button>
      </form>
    </div>
  );
};

export default SwapFormEarly;
