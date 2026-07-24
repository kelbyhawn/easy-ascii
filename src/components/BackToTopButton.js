export default function BackToTopButton({ isScrolling, onClickBackToTop }) {
  return (
    <>
      {isScrolling && (
        <button className="back-to-top" onClick={onClickBackToTop}>
          <span>↑</span> Back to top
        </button>
      )}
    </>
  );
}
