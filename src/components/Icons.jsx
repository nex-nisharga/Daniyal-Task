import { Moon, SunMedium } from "lucide-react";

export const Icons = {
  Moon,
  SunMedium,
  EmptyBox: (props) => (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      width="17"
      height="20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M743.68 176.61952h-448l-220.16 240.52736v345.6c0 56.54528 45.85472 102.4 102.4 102.4h683.52c56.54528 0 102.4-45.85472 102.4-102.4v-345.6l-220.16-240.52736z m-416.43008 71.68h384.8704l176.52736 192.8704h-193.87392c0 0.28672 0.04096 0.57344 0.04096 0.84992 0 94.57664-76.94336 171.52-171.52 171.52-94.5664 0-171.52-76.94336-171.52-171.52 0-0.27648 0.04096-0.5632 0.0512-0.84992h-201.12384l176.54784-192.8704z m534.19008 545.16736h-683.52c-16.93696 0-30.72-13.78304-30.72-30.72v-249.89696h143.4112c30.33088 99.75808 123.02336 172.36992 232.69376 172.36992 109.68064 0 202.36288-72.61184 232.69376-172.36992h136.17152v249.89696a30.7712 30.7712 0 0 1-30.73024 30.72z"
        fill="inherite"
      />
    </svg>
  ),
  Clock: (props) => (
    <svg
      {...props}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5ZM8.25 3.75C8.25 3.33579 7.91421 3 7.5 3C7.08579 3 6.75 3.33579 6.75 3.75V7.5C6.75 7.91421 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 7.91421 11.25 7.5C11.25 7.08579 10.9142 6.75 10.5 6.75H8.25V3.75Z"
        fill="white"
      />
    </svg>
  ),
  Phone: (props) => (
    <svg
      {...props}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4_2412)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.9375 2.8125C0.9375 1.77697 1.77697 0.9375 2.8125 0.9375H3.66977C4.2075 0.9375 4.67623 1.30347 4.80665 1.82515L5.49777 4.58964C5.61213 5.04706 5.44121 5.52847 5.06401 5.81136L4.2555 6.41775C4.17154 6.48072 4.15329 6.57292 4.17688 6.6373C4.88657 8.57468 6.42532 10.1134 8.3627 10.8231C8.42708 10.8467 8.51928 10.8285 8.58225 10.7445L9.18864 9.93599C9.47153 9.55879 9.95294 9.38787 10.4104 9.50223L13.1748 10.1933C13.6965 10.3238 14.0625 10.7925 14.0625 11.3302V12.1875C14.0625 13.223 13.223 14.0625 12.1875 14.0625H10.7812C5.3447 14.0625 0.9375 9.6553 0.9375 4.21875V2.8125Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_2412">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  Envelope: (props) => (
    <svg
      {...props}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 3C1.42157 3 0.75 3.67157 0.75 4.5V5.37111L7.08074 8.53647C7.34467 8.66844 7.65533 8.66844 7.91926 8.53647L14.25 5.37111V4.5C14.25 3.67157 13.5784 3 12.75 3H2.25Z"
        fill="white"
      />
      <path
        d="M14.25 6.62889L8.42238 9.5427C7.84173 9.83303 7.15827 9.83303 6.57762 9.5427L0.75 6.62889V10.5C0.75 11.3284 1.42157 12 2.25 12H12.75C13.5784 12 14.25 11.3284 14.25 10.5V6.62889Z"
        fill="white"
      />
    </svg>
  ),
  Map: (props) => (
    <svg
      {...props}
      width="11"
      height="14"
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.26756 13.1997L5.26966 13.2007C5.4175 13.265 5.5 13.25 5.5 13.25C5.5 13.25 5.5825 13.265 5.73093 13.2004L5.73244 13.1997L5.73674 13.1978L5.75036 13.1915C5.76163 13.1863 5.77725 13.1789 5.79693 13.1694C5.83628 13.1505 5.89191 13.1229 5.9615 13.0866C6.10058 13.0141 6.29591 12.9064 6.52874 12.7621C6.99342 12.4741 7.61302 12.037 8.23411 11.4383C9.47663 10.2407 10.75 8.36936 10.75 5.75C10.75 2.85051 8.3995 0.5 5.5 0.5C2.60051 0.5 0.25 2.85051 0.25 5.75C0.25 8.36936 1.52337 10.2407 2.76589 11.4383C3.38698 12.037 4.00658 12.4741 4.47126 12.7621C4.70409 12.9064 4.89942 13.0141 5.0385 13.0866C5.10809 13.1229 5.16372 13.1505 5.20307 13.1694C5.22275 13.1789 5.23837 13.1863 5.24964 13.1915L5.26326 13.1978L5.26756 13.1997ZM5.5 7.4375C6.43198 7.4375 7.1875 6.68198 7.1875 5.75C7.1875 4.81802 6.43198 4.0625 5.5 4.0625C4.56802 4.0625 3.8125 4.81802 3.8125 5.75C3.8125 6.68198 4.56802 7.4375 5.5 7.4375Z"
        fill="white"
      />
    </svg>
  ),
  UpArrowLong: (props) => (
    <svg
      {...props}
      width="8"
      height="10"
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.39863 4.99299L7.58613 8.18049C7.80645 8.40081 7.80645 8.75706 7.58613 8.97503L7.05645 9.50471C6.83613 9.72503 6.47988 9.72503 6.26191 9.50471L4.0002 7.24768L1.74082 9.50706C1.52051 9.72737 1.16426 9.72737 0.946289 9.50706L0.414258 8.97737C0.193945 8.75706 0.193945 8.40081 0.414258 8.18284L3.60176 4.99534C3.82207 4.77268 4.17832 4.77268 4.39863 4.99299ZM3.60176 0.492993L0.414258 3.68049C0.193945 3.90081 0.193945 4.25706 0.414258 4.47502L0.943945 5.00471C1.16426 5.22502 1.52051 5.22502 1.73848 5.00471L3.99785 2.74534L6.25723 5.00471C6.47754 5.22502 6.83379 5.22502 7.05176 5.00471L7.58144 4.47502C7.80176 4.25471 7.80176 3.89846 7.58144 3.68049L4.39395 0.492993C4.17832 0.272681 3.82207 0.272681 3.60176 0.492993Z"
        fill="white"
      />
    </svg>
  ),
  ArrowRightLong: (props) => (
    <svg
      {...props}
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7197 0.71967C15.0126 0.426777 15.4874 0.426777 15.7803 0.71967L19.5303 4.46967C19.8232 4.76256 19.8232 5.23744 19.5303 5.53033L15.7803 9.28033C15.4874 9.57322 15.0126 9.57322 14.7197 9.28033C14.4268 8.98744 14.4268 8.51256 14.7197 8.21967L17.1893 5.75H1C0.585786 5.75 0.25 5.41421 0.25 5C0.25 4.58579 0.585786 4.25 1 4.25H17.1893L14.7197 1.78033C14.4268 1.48744 14.4268 1.01256 14.7197 0.71967Z"
        fill="#E5E7EB"
      />
    </svg>
  ),
  UpArrow: (props) => (
    <svg
      {...props}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.42043 5.03362L8.42049 5.03367C8.49979 5.10916 8.6124 5.15567 8.73472 5.15575L8.42043 5.03362ZM8.42043 5.03362L5.35067 2.11238L5.00599 1.78438M8.42043 5.03362L5.00599 1.78438M5.00599 1.78438L4.66131 2.11238M5.00599 1.78438L4.66131 2.11238M4.66131 2.11238L1.59155 5.03362L1.5915 5.03356M4.66131 2.11238L1.5915 5.03356M1.5915 5.03356L1.58531 5.03966M1.5915 5.03356L1.58531 5.03966M1.58531 5.03966C1.54659 5.0778 1.49893 5.10953 1.44444 5.1318C1.38993 5.15409 1.33045 5.16613 1.26967 5.16663C1.2089 5.16713 1.14914 5.15608 1.09411 5.13465C1.03912 5.11324 0.990749 5.08223 0.951215 5.04461C0.911736 5.00704 0.881943 4.96375 0.86226 4.91797C0.842606 4.87226 0.833074 4.82422 0.83351 4.7764C0.833947 4.72858 0.844358 4.68063 0.864899 4.63513C0.885473 4.58955 0.916147 4.54662 0.956438 4.50959L0.956489 4.50964M1.58531 5.03966L0.956489 4.50964M0.956489 4.50964L0.962771 4.50367M0.956489 4.50964L0.962771 4.50367M0.962771 4.50367L4.69155 0.955304M0.962771 4.50367L4.69155 0.955304M4.69155 0.955304C4.77091 0.8798 4.88361 0.833313 5.00599 0.833313C5.12837 0.833313 5.24107 0.8798 5.32043 0.955304L9.04916 4.50361C9.10787 4.5595 9.14481 4.62762 9.1595 4.6979L9.64893 4.59563M4.69155 0.955304L9.64893 4.59563M9.64893 4.59563L9.1595 4.6979C9.17414 4.76796 9.16688 4.84088 9.13742 4.90856M9.64893 4.59563L9.13742 4.90856M9.13742 4.90856C9.10782 4.97657 9.05589 5.03874 8.98429 5.08428M9.13742 4.90856L8.98429 5.08428M8.98429 5.08428C8.91251 5.12994 8.82568 5.15569 8.73492 5.15575L8.98429 5.08428Z"
        fill="#1F2A37"
        stroke="white"
      />
    </svg>
  ),
  DownArrow: (props) => (
    <svg
      {...props}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.69622 5.04431L4.69628 5.04436C4.77575 5.11993 4.88872 5.16657 5.01153 5.16665L4.69622 5.04431ZM4.69622 5.04431L0.962889 1.49602L0.962941 1.49597M4.69622 5.04431L0.962941 1.49597M0.962941 1.49597L0.956553 1.49011M0.962941 1.49597L0.956553 1.49011M0.956553 1.49011C0.916177 1.45304 0.885474 1.41011 0.864895 1.36458C0.844348 1.31912 0.833947 1.27124 0.83351 1.22352C0.833074 1.1758 0.842598 1.12784 0.862254 1.08218C0.881942 1.03644 0.911761 0.993151 0.95132 0.955552C0.990935 0.917901 1.03944 0.886836 1.09462 0.865379C1.14983 0.843908 1.2098 0.832826 1.27081 0.833329C1.33182 0.833833 1.39151 0.845904 1.44622 0.868237C1.50088 0.890556 1.54867 0.922335 1.58746 0.960509L1.58741 0.960563M0.956553 1.49011L1.58741 0.960563M1.58741 0.960563L1.59371 0.966547M1.58741 0.960563L1.59371 0.966547M1.59371 0.966547L4.66717 3.88768L5.01163 4.21506M1.59371 0.966547L5.01163 4.21506M5.01163 4.21506L5.35609 3.88768M5.01163 4.21506L5.35609 3.88768M5.35609 3.88768L8.4258 0.970122C8.50588 0.897841 8.6173 0.854139 8.73748 0.855131C8.85894 0.856134 8.97038 0.902625 9.049 0.977352C9.12681 1.0513 9.16596 1.14586 9.16682 1.23905C9.16766 1.3312 9.13109 1.42506 9.05661 1.4996L5.32704 5.04431L5.32699 5.04436M5.35609 3.88768L5.32699 5.04436M5.32699 5.04436C5.24751 5.11993 5.13454 5.16657 5.01173 5.16665L5.32699 5.04436Z"
        fill="#1F2A37"
        stroke="#E5E7EB"
      />
    </svg>
  ),
  Home: (props) => (
    <svg
      {...props}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.099 9.91076L16.4302 8.24407L10.5897 2.41068C10.4333 2.25445 10.2211 2.16669 9.99984 2.16669C9.7786 2.16669 9.56641 2.25445 9.40995 2.41068L3.56944 8.24407L1.90072 9.91076C1.74873 10.0679 1.66463 10.2784 1.66654 10.4969C1.66844 10.7154 1.75619 10.9244 1.91088 11.079C2.06558 11.2335 2.27485 11.3211 2.49361 11.323C2.71238 11.3249 2.92314 11.2409 3.0805 11.0891L3.32497 10.8449V17.1667C3.32497 17.6087 3.50078 18.0326 3.81372 18.3452C4.12667 18.6578 4.55111 18.8334 4.99369 18.8334H7.49676C7.71805 18.8334 7.93027 18.7456 8.08674 18.5893C8.24322 18.433 8.33112 18.221 8.33112 18V14.6666C8.33112 14.4456 8.41903 14.2337 8.5755 14.0774C8.73197 13.9211 8.94419 13.8333 9.16548 13.8333H10.8342C11.0555 13.8333 11.2677 13.9211 11.4242 14.0774C11.5807 14.2337 11.6686 14.4456 11.6686 14.6666V18C11.6686 18.221 11.7565 18.433 11.9129 18.5893C12.0694 18.7456 12.2816 18.8334 12.5029 18.8334H15.006C15.4486 18.8334 15.873 18.6578 16.186 18.3452C16.4989 18.0326 16.6747 17.6087 16.6747 17.1667V10.8449L16.9192 11.0891C17.0765 11.2409 17.2873 11.3249 17.5061 11.323C17.7248 11.3211 17.9341 11.2335 18.0888 11.079C18.2435 10.9244 18.3312 10.7154 18.3331 10.4969C18.335 10.2784 18.2509 10.0679 18.099 9.91076Z"
        fill="#374151"
      />
    </svg>
  ),
  ArrowRight: (props) => (
    <svg
      {...props}
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.78925 12.3334C1.56997 12.3333 1.35563 12.2649 1.17332 12.1369C0.991007 12.0089 0.848915 11.8269 0.765006 11.614C0.681097 11.4011 0.659139 11.1669 0.701906 10.9409C0.744672 10.7149 0.850245 10.5073 1.00528 10.3443L4.65682 6.50718L1.00528 2.67006C0.899367 2.56257 0.81489 2.43399 0.756774 2.29183C0.698659 2.14967 0.668069 1.99677 0.66679 1.84205C0.66551 1.68733 0.693568 1.53389 0.749323 1.39069C0.805079 1.24748 0.887416 1.11738 0.991532 1.00798C1.09565 0.898569 1.21946 0.812047 1.35573 0.753458C1.49201 0.694869 1.63803 0.665387 1.78526 0.666731C1.9325 0.668075 2.07801 0.70022 2.21329 0.761289C2.34858 0.822358 2.47094 0.911128 2.57323 1.02242L7.00875 5.68336C7.21663 5.90187 7.33341 6.1982 7.33341 6.50718C7.33341 6.81616 7.21663 7.11249 7.00875 7.331L2.57323 11.9919C2.36532 12.2105 2.08332 12.3333 1.78925 12.3334Z"
        fill="#6B7280"
      />
    </svg>
  ),
  Hamburger: (props) => (
    <svg
      {...props}
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.75C0 0.335786 0.335786 0 0.75 0H17.25C17.6642 0 18 0.335786 18 0.75C18 1.16421 17.6642 1.5 17.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H17.25C17.6642 5.25 18 5.58579 18 6C18 6.41421 17.6642 6.75 17.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM8.25 11.25C8.25 10.8358 8.58579 10.5 9 10.5H17.25C17.6642 10.5 18 10.8358 18 11.25C18 11.6642 17.6642 12 17.25 12H9C8.58579 12 8.25 11.6642 8.25 11.25Z"
        fill="#111928"
      />
    </svg>
  ),
  X: (props) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L12 10.9393L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L13.0607 12L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L12 13.0607L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L10.9393 12L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
        fill="#111928"
      />
    </svg>
  ),
};
