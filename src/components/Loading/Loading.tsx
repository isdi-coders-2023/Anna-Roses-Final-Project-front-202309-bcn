import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled className="loading">
      <img
        src="/images/loading.webp"
        alt="cargando"
        className="loading__image"
        width="250"
        height="250"
      />
      <span className="loading__text">Cargando...</span>
    </LoadingStyled>
  );
};

export default Loading;
