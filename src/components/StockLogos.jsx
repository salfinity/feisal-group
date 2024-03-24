import React, { useId } from "react";
import Image from "next/image";
export function HdslLogo(props) {
  return (
    <Image
      src="/h-Logo.png"
      className="w-auto h-8 p-1 object-contain"
      width={200}
      height={200}
      alt="LogoTwo"
      priority
    />
  );
}

export function TupleLogo(props) {
  return (
    <svg viewBox="0 0 40 40" fill="#fff" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 8 12 11.692v12l3.5 1.231v3.385L26 32V12.615l-3.5 1.231V8Zm-5.833 17.334 5.833 2.05v-12.24l2.333-.82v15.968l-8.166-2.87v-2.088Z"
      />
    </svg>
  );
}

export function TransistorLogo(props) {
  return (
    <svg viewBox="0 0 40 40" fill="#fff" aria-hidden="true" {...props}>
      <path d="M20 32c-6.617 0-12-5.383-12-12S13.383 8 20 8s12 5.383 12 12-5.383 12-12 12Zm0-22.4C14.267 9.6 9.6 14.266 9.6 20S14.267 30.4 20 30.4c5.734 0 10.4-4.666 10.4-10.4S25.734 9.6 20 9.6Z" />
      <path d="M19.434 27.749c.15.15.354.234.566.235.433 0 .8-.368.8-.8V12.815a.8.8 0 0 0-1.6 0v14.368c0 .212.084.415.234.565ZM12.833 20.8h3.833a.802.802 0 0 0 .802-.8.8.8 0 0 0-.801-.8h-3.834c-.45 0-.8.35-.8.8a.8.8 0 0 0 .8.8ZM23.333 20.8h3.85c.433 0 .783-.35.783-.8a.799.799 0 0 0-.8-.8h-3.833c-.45 0-.8.35-.8.8a.8.8 0 0 0 .8.8Z" />
    </svg>
  );
}

export function DiageoLogo(props) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="#fff"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M22.16 19 26 13H14l3.84 6" fill="none" />
      <path d="M25 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
    </svg>
  );
}

export function StaticKitLogo(props) {
  return (
    <svg viewBox="0 0 40 40" fill="#fff" aria-hidden="true" {...props}>
      <path d="m26.068 10.555-11.49 13.089L12 21.089 23.489 8l2.58 2.555ZM28 18.91 16.512 32l-2.579-2.555 11.489-13.089L28 18.911Z" />
    </svg>
  );
}

export function StatamicLogo(props) {
  return (
    <svg viewBox="0 0 40 40" fill="#fff" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.177 27.293c0 1.921-.644 2.707-2.398 2.707H12.22c-1.754 0-2.397-.786-2.397-2.707v-3.741c0-1.805-.837-2.824-1.642-3.291a.385.385 0 0 1-.133-.143.403.403 0 0 1 .133-.526c.837-.551 1.642-1.704 1.642-3.241v-3.677c0-2.072.547-2.674 2.3-2.674h15.754c1.754 0 2.3.602 2.3 2.674v3.675c0 1.537.805 2.69 1.641 3.24.243.168.243.52 0 .67-.804.484-1.64 1.503-1.64 3.29v3.743h-.001Zm-14.739-2.455c1.271 1.152 2.64 1.737 4.522 1.737 2.96 0 4.891-1.537 4.891-4.026 0-2.637-2.3-3.31-4.17-3.856-1.282-.375-2.363-.691-2.363-1.54 0-.551.564-1.086 1.513-1.086.917 0 1.674.2 2.397.584.242.117.467.2.676.2.306 0 .547-.15.756-.45l.29-.451a.955.955 0 0 0 .161-.55c0-.336-.161-.67-.402-.837-.966-.635-2.27-1.17-4.039-1.17-2.51 0-4.44 1.37-4.44 3.826 0 2.746 2.349 3.443 4.23 4h.001c1.255.372 2.3.681 2.3 1.497 0 .785-.707 1.17-1.592 1.17a5.19 5.19 0 0 1-2.992-.92c-.274-.183-.532-.3-.805-.3-.242 0-.451.117-.644.368l-.387.517a.888.888 0 0 0-.192.585c0 .25.08.501.29.702Z"
      />
    </svg>
  );
}

export function MirageLogo(props) {
  return (
    <svg viewBox="0 0 40 40" fill="#fff" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.05 9c2.307 0 4.177 1.885 4.177 4.21a4.21 4.21 0 0 1-2.762 3.964l3.366 6.057h2.304c.355 0 .642.29.642.647a.645.645 0 0 1-.642.647H7.142a.645.645 0 0 1-.642-.647c0-.358.288-.647.643-.647h2.304l5.994-10.747a.641.641 0 0 1 1.097-.036l3.444 5.32 1.071-1.627a4.214 4.214 0 0 1-1.178-2.93c0-2.326 1.87-4.211 4.176-4.211Zm-3.304 9.948 2.772 4.283h3.84l-4.317-7.769-2.295 3.486Zm1.239 4.283-5.944-9.183-5.121 9.183h11.065Zm5.038-10.02a2.995 2.995 0 0 1-2.159 2.883l-1.216-2.19a.64.64 0 0 0-1.096-.04l-.811 1.232a3 3 0 0 1-.663-1.885c0-1.655 1.332-2.997 2.973-2.997 1.641 0 2.972 1.341 2.972 2.997Z"
      />
      <path d="M12.069 26.469c-.354 0-.641.289-.641.646 0 .358.287.646.64.646h14.139c.354 0 .641-.29.641-.646a.644.644 0 0 0-.64-.646h-14.14Zm4.928 3.236a.645.645 0 0 0-.642.648c0 .357.288.647.642.647h4.282c.355 0 .643-.29.643-.647a.645.645 0 0 0-.643-.648h-4.282Z" />
    </svg>
  );
}

export function ReversableLogo(props) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 26v-5.25m0 0V16a2 2 0 0 1 2-2h4.21c.968 0 1.37 1.24.587 1.809L15 20.75Zm0 0L25 26" />
    </svg>
  );
}

export function DeviceArrowIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        d="M12 25l8-8m0 0h-6m6 0v6"
        stroke="#171717"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  );
}

export function DeviceCardsIcon(props) {
  let id = useId();

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
        fill={`url(#${id}-gradient)`}
      />
      <rect x={9} y={6} width={14} height={4} rx={1} fill="#171717" />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={16}
          y1={12}
          x2={16}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#737373" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DeviceClockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
        fill="#171717"
      />
    </svg>
  );
}

export function DeviceListIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <circle cx={11} cy={14} r={2} fill="#171717" />
      <circle cx={11} cy={20} r={2} fill="#171717" />
      <circle cx={11} cy={26} r={2} fill="#171717" />
      <path
        d="M16 14h6M16 20h6M16 26h6"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  );
}

export function DeviceLockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z"
        fill="#171717"
      />
    </svg>
  );
}

export function DeviceChartIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z"
        fill="#171717"
      />
      <path
        d="M10 12h12"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  );
}
