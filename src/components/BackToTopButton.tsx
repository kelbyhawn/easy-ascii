type BackToTopButtonProps = {
  onClickBackToTop: () => void;
};

export default function BackToTopButton({
  onClickBackToTop,
}: BackToTopButtonProps) {
  return (
    <button className="back-to-top" onClick={onClickBackToTop}>
      <span>↑</span> Back to top
    </button>
  );
}
