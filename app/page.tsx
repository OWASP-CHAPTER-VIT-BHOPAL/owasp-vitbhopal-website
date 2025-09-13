import { Container } from "@/components/container";

export default function Home() {
  return (
    <Container>
      <div className="bg-gradient-to-l from-[#999] to-white w-full h-[85vh] rounded-2xl px-10 flex justify-between items-center overflow-hidden">
        <div className="flex flex-col justify-end text-[var(--text-colour)] h-full w-1/2 gap-y-6">
          <div className="text-[var(--text-colour)]/30 font-bold text-5xl leading-14">Welcome to <span className="text-[var(--text-colour)]">OWASP</span> VIT Bhopal University Student Chapter </div>
          <div className="h-1 w-8/10 bg-black" />
          <div className="text-sm font-medium pr-4 pb-16">
            The OWASP VIT Bhopal University Student Chapter is a student-led organization dedicated to promoting web application security awareness and education. Our mission is to empower students with the knowledge and skills needed to build secure applications and protect against cyber threats.
          </div>
        </div>
        <div className="h-full w-1/2 flex justify-end items-center pr-10">
          <svg width="287" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M228.958 82.7441V-625.148H230.178V82.5397L284.629 140.704V378.168H283.409V140.909L228.958 82.7441Z" fill="black" />
            <path d="M197.704 141.902V-711H198.935V141.596L262.165 208.516L261.088 209.027L197.704 141.902Z" fill="black" />
            <path d="M173.287 229.49V-538.656H174.516V229.285L222.122 279.875V428.782H220.893V280.079L173.287 229.49Z" fill="black" />
            <path d="M46.8068 376.988V157.998L46.961 157.896L122.242 78.393V-682.81H123.476V78.5973L123.322 78.6995L48.0409 158.202V376.682L110.981 443.104V719.014H109.747V443.309L46.8068 376.988Z" fill="black" />
            <path d="M0.414852 382.229V159.469L0.568214 159.367L86.1132 68.5261V-472.023H87.3396V68.7305V68.8327L1.64138 159.776V382.024L76.6082 461.625V696.953V697.055L37.8217 738.235L36.7485 737.826L75.3817 696.749V461.83L0.414852 382.229Z" fill="black" />
            <path d="M80.5032 359.258V188.43L80.6558 188.328L148.125 116.4V-618.099H149.347V116.604L149.194 116.706L81.7243 188.634V359.053L138.051 419.129V680.071L198.193 744.234L197.125 744.643L136.83 680.378V419.334L80.5032 359.258Z" fill="black" />
            <path d="M118.105 346.92V203.678V203.575L143.132 176.992L144.201 177.401L119.326 203.984V346.613L166.023 396.61V643.935L206.006 686.57L204.938 686.979L164.803 644.14V396.814L118.105 346.92Z" fill="black" />
            <path d="M197.704 200.465L198.78 200.057L257.329 262.137V473.291V473.393L226.902 505.454V596.839L285.605 659.021L284.683 659.429L225.673 597.043V505.25L225.826 505.148L256.1 472.985V262.341L197.704 200.465Z" fill="black" />
            <path d="M145.452 308.973V235.936H146.68V308.667L190.895 355.451V635.952L237.26 685.188L236.185 685.699L189.667 636.259V355.655L145.452 308.973Z" fill="black" />
            <path d="M168.404 282.474L169.468 282.065L202.588 317.652V523.604H201.373V317.856L168.404 282.474Z" fill="black" />
            <ellipse cx="283.977" cy="379.769" rx="1.60172" ry="1.51096" transform="rotate(90 283.977 379.769)" fill="black" />
            <ellipse cx="202.083" cy="525.206" rx="1.60172" ry="1.51096" transform="rotate(90 202.083 525.206)" fill="black" />
            <ellipse cx="221.423" cy="430.385" rx="1.60172" ry="1.51096" transform="rotate(90 221.423 430.385)" fill="black" />
            <ellipse cx="262.522" cy="209.988" rx="1.60172" ry="1.51096" transform="rotate(90 262.522 209.988)" fill="black" />
          </svg>
        </div>
      </div>
    </Container>
  );
}
