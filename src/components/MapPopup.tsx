interface Props {
  children: React.ReactNode;
}

function MapPopup({ children }: Props) {
  return (
    <div className="absolute bottom-0 left-0 z-[1000] w-screen bg-slate-800 p-7 text-center shadow-xl md:bottom-16 md:left-1/2 md:w-auto md:-translate-x-1/2 md:rounded-md md:p-9">
      {children}
    </div>
  );
}

export default MapPopup;
