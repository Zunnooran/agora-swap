/* eslint-disable @typescript-eslint/no-explicit-any */
// GreenNeon.js

const GreenNeon = (props: any) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      className={props.className}
      viewBox='0 0 440 305'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_395_225)'>
        <g filter='url(#filter0_i_395_225)'>
          <rect x='0.935547' width='438.503' height='405.846' rx='15.8071' fill='black' />
        </g>
        <rect x='0.935547' y='203.537' width='438.503' height='101.014' fill='url(#paint0_linear_395_225)' />
        <g style={{ mixBlendMode: 'screen' }} filter='url(#filter1_f_395_225)'>
          <path
            d='M-19.1696 54.6207C221.433 -71.2297 539.999 -8.77846 621.41 4.37315L-306.384 -347.26L-437.111 151.217C-242.507 235.138 -246.533 173.546 -19.1696 54.6207Z'
            fill='#30AA2D'
          />
          <path
            d='M-19.1696 54.6207C221.433 -71.2297 539.999 -8.77846 621.41 4.37315L-306.384 -347.26L-437.111 151.217C-242.507 235.138 -246.533 173.546 -19.1696 54.6207Z'
            stroke='url(#paint1_linear_395_225)'
            stroke-opacity='0.1'
            stroke-width='62.3642'
          />
        </g>
      </g>
      <rect
        x='0.526905'
        y='304.024'
        width='303.497'
        height='438.385'
        rx='16.334'
        transform='rotate(-90 0.526905 304.024)'
        stroke='url(#paint2_linear_395_225)'
        stroke-width='1.05381'
      />
      <defs>
        <filter
          id='filter0_i_395_225'
          x='0.935547'
          y='0'
          width='438.504'
          height='410.061'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feMorphology radius='7.37667' operator='dilate' in='SourceAlpha' result='effect1_innerShadow_395_225' />
          <feOffset dy='4.21524' />
          <feGaussianBlur stdDeviation='12.6457' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix type='matrix' values='0 0 0 0 0.244613 0 0 0 0 1 0 0 0 0 0.637414 0 0 0 1 0' />
          <feBlend mode='normal' in2='shape' result='effect1_innerShadow_395_225' />
        </filter>
        <filter
          id='filter1_f_395_225'
          x='-551.985'
          y='-465.338'
          width='1255.7'
          height='766.314'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='38.9776' result='effect1_foregroundBlur_395_225' />
        </filter>
        <linearGradient
          id='paint0_linear_395_225'
          x1='220.187'
          y1='203.537'
          x2='220.187'
          y2='279.102'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-opacity='0' />
          <stop offset='1' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_395_225'
          x1='104.676'
          y1='-191.469'
          x2='-59.2031'
          y2='187.278'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='white' />
          <stop offset='1' stop-color='white' stop-opacity='0' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_395_225'
          x1='304.551'
          y1='523.495'
          x2='80.3833'
          y2='523.495'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#3EFF97' />
          <stop offset='1' stop-color='#1DFE4F' stop-opacity='0' />
          <stop offset='1' stop-color='#59FF3E' stop-opacity='0' />
        </linearGradient>
        <clipPath id='clip0_395_225'>
          <rect
            y='304.551'
            width='304.551'
            height='439.438'
            rx='16.8609'
            transform='rotate(-90 0 304.551)'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GreenNeon;
