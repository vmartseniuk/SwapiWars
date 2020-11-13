/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";

function DeathStar(props) {
  const { stroke } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 96 96" {...props}>
      <circle fill="none" stroke={stroke} strokeWidth={4} strokeLinecap="round" strokeMiterlimit={10} cx={35} cy={27} r={1} />
      <circle fill="none" stroke={stroke} strokeWidth={4} strokeLinecap="round" strokeMiterlimit={10} cx={35} cy={27} r={13} />
      <circle fill="none" stroke={stroke} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx={93} cy={24} r={1} />
      <circle fill="none" stroke={stroke} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx={84} cy={91} r={1} />
      <circle fill="none" stroke={stroke} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx={86} cy={7} r={5} />
      <path
        fill="none"
        stroke={stroke}
        strokeWidth={4}
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="M2 48h92M61 9h13M71 24h15M68 30h16M68 16h10M71 94H48M90 75H75M87 69H66M82 82H72M83 42h10.623M86 59h6.612M89 54h4.586M52.003 83.78c-.608.067-1.221.119-1.837.156M43 84c-9.908-1.492-18.899-7.425-24.431-15.263M83 54h-2M78 59h-2M60 69h-2M64 24h-2"
      />
      <path
        fill="none"
        stroke={stroke}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M69.175 88.873s8.492-3.665 12.159-22.578c0 0 .104-2.546 9.679-2.296h.003C92.944 59 94 53.585 94 47.833c0-4.098-.536-7.904-1.541-11.686l-.088-.324C83.167 36.583 79.333 34 79.333 34c-4-21.333-14.159-28.686-14.159-28.686l-.046-.019A45.873 45.873 0 0048 2C22.595 2 2 22.595 2 48s20.595 46 46 46c7.645 0 14.831-1.826 21.175-5.127h0z"
      />
    </svg>
  );
}

const MemoDeathStar = React.memo(DeathStar);
export default MemoDeathStar;
