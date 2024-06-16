function Overlay({ children, onClick }) {
  return (
    <div
      className="fixed top-20 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Overlay;
