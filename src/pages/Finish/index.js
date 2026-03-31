import BackButton from "../../components/BackButton";
import DataUser from "../../components/DataUser";
import Header from "../../components/Header";

function Finish() {
  return (
    <div className="page-bg">
      <Header title="Cadastro Finalizado!" />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">

            <div className="card shadow-lg border-0 p-4 text-center mb-4">
              <h4 className="mb-3">Resumo dos seus dados</h4>
              <DataUser />
            </div>

            <div className="text-center">
              <BackButton />
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .page-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #ff6a5b, #ffb347);
        }

        .card {
          border-radius: 16px;
          background: #ffffff;
        }
      `}</style>
    </div>
  );
}

export default Finish;