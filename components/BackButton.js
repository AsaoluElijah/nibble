const BackButton = ({ className }) => {
  return (
    <button className={className} onClick={() => history.back()}>
      Go back
    </button>
  );
};

export default BackButton;
