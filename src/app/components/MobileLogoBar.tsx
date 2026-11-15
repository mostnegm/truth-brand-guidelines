import imgLogo from "../../imports/logo.png";

// Logo bar for screens without the sidebar.
export default function MobileLogoBar() {
  return (
    <div className="border-b border-[rgba(0,0,0,0.1)] px-5 py-[30px] md:px-8 lg:hidden">
      <a href="/" aria-label="Saheeh brand guidelines">
        <img alt="Saheeh logo" className="w-[69px] h-[66px] object-contain" src={imgLogo} />
      </a>
    </div>
  );
}
