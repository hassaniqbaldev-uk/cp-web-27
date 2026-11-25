// react-icons only has a one-colour Google Ads logo. Takes `size` like its icons.
const GoogleAdsLogo = ({ size = 78, className = "" }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    fill="none"
    role="img"
    aria-label="Google Ads"
    className={className}
  >
    <path d="M23 11L9 36" stroke="#FBBC04" strokeWidth="12" />
    <circle cx="10" cy="36" r="7" fill="#34A853" />
    <path
      d="M24 10.5L38 35.5"
      stroke="#1A86D9"
      strokeWidth="13"
      strokeLinecap="round"
    />
  </svg>
);

export default GoogleAdsLogo;
