interface Props {
  children: React.ReactNode;
}

function MapPopup({ children }: Props) {
  return (
    <div className="absolute bottom-5 left-0 z-[1000] flex w-full justify-center">
      <div className="w-screen bg-slate-800 p-7 text-center shadow-xl md:w-auto md:rounded-md md:p-10">
        {children}
      </div>
    </div>
  );
}

export default MapPopup;
