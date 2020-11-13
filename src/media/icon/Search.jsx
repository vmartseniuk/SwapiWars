/* eslint-disable react/prop-types */
import * as React from "react";

function Search(props) {
  const { color } = props;
  return (
    <svg width="1em" height="1em" viewBox="0 0 96 96" {...props}>
      <path
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M11.672 42.046C4.301 29.278 8.676 12.952 21.443 5.581c12.768-7.371 29.094-2.997 36.465 9.771M57.908 15.352l-1.954 7.293L18.965 44l-7.293-1.954"
      />
      <circle transform="rotate(-30 30 20.001)" fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" strokeMiterlimit={10} cx={30} cy={20} r={7.999} />
      <circle transform="rotate(-30 46.996 17.002)" fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx={47} cy={17} r={1} />
      <circle fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx={61} cy={51} r={1} />
      <circle fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx={34} cy={74} r={1} />
      <path
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M53.673 24.039C72.226 24.912 87 40.231 87 59c0 19.33-15.67 35-35 35S17 78.33 17 59c0-5.255 1.093-11.222 3.169-15.695M86.774 55.016A71.823 71.823 0 0157.508 24.43"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M49.885 93.938c-2.821-1.464-4.99-3.673-6.099-6.516-3.055-7.826 3.071-17.494 13.682-21.593 10.612-4.099 21.691-1.078 24.746 6.748.361.924.593 1.873.706 2.836M17.266 63.284A22.937 22.937 0 0026 65c12.702 0 23-10.298 23-23 0-4.829-1.489-9.311-4.032-13.011M40.834 59.577L50.1 70.095M79.726 50.534l-3.602 15.533M47.404 33.564l13.762-2.68M7 94H2M79 94H15M94 94h-7M33.426 35.653a8.667 8.667 0 11-13.713 7.916"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M71.935 80.777c.558 3.649-2.542 7.602-6.924 8.83-4.382 1.227-8.387-.736-8.946-4.384-.558-3.649 2.542-7.602 6.924-8.83 4.383-1.227 8.388.736 8.946 4.384z"
      />
    </svg>
  );
}

const MemoSearch = React.memo(Search);
export default MemoSearch;
