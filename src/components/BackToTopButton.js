export default function BackToTopButton({ onClickBackToTop }) {
  return (
    <button className="back-to-top" onClick={onClickBackToTop}>
      <span>↑</span> Back to top
    </button>
  );
}
