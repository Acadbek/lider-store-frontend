import type { SVGProps } from "react";
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.77 14.692h.884V9.308h-2.27v.884H6.77zm3.115 0h2.346q.328 0 .549-.22.22-.22.22-.549v-3.846q0-.329-.22-.549t-.55-.22H9.886q-.33 0-.55.22t-.22.549v3.846q0 .329.22.549t.55.22m.115-.884v-3.616h2.116v3.616zm4.462.884h.884v-2.365l2.289 2.365h1.211l-2.634-2.73 2.634-2.654h-1.173l-2.327 2.327V9.308h-.884zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"
    />
  </svg>
);
export default SvgLogo;
