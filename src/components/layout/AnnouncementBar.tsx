export default function AnnouncementBar() {
  return (
    <div className="w-full bg-brand-bg">
      <div className="mx-auto flex h-[34px] max-w-container items-center justify-center px-6 text-brand-green md:justify-between">
        <div className="hidden flex-1 md:block" />
        <div className="flex items-center gap-3 text-[13px] font-medium leading-none md:text-[15px]">
          <button aria-label="Previous" className="text-brand-green">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 1L2.5 6L7.5 11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span>Free Shipping on Orders Over $79</span>
          <button aria-label="Next" className="text-brand-green">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 1L7.5 6L2.5 11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="hidden flex-1 items-center justify-end gap-2 text-[15px] font-medium leading-none md:flex">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path
              d="M4 13a8 8 0 0116 0M4 13v3a2 2 0 002 2h1a1 1 0 001-1v-4a1 1 0 00-1-1H4zm16 0v3a2 2 0 01-2 2v2a2 2 0 01-2 2h-3"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 13h-3a1 1 0 00-1 1v4a1 1 0 001 1h1"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Wellness Support</span>
        </div>
      </div>
    </div>
  );
}
