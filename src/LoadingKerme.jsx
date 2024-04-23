import "./loadingKerme.css";

export const LoadingKerme = () => {
  return (
    <div className="modal-loading">
      <div className="modal-loading__header">Información</div>
      <div className="modal-loading__loading">
        <img src="./img/logoGiro.svg" alt="Logo kerme" className="modal-loading__logo" />
        <div className="modal-loading__spinner">
          <img src="./img/giro.svg" alt="spinner logo" className="sppiner__spinner" />
        </div>
      </div>
    </div>
  )
}