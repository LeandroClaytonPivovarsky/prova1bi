import BackButton from "../../components/BackButton";
import DataUser from "../../components/DataUser";
import FormAddress from "../../components/FormAddress";
import Header from "../../components/Header";

function Address() {
  return (
    <div className="page-bg">
      <Header title="Endereço Residencial" />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            {/* LADO A LADO */}
            <div className="row g-4">

              <div className="col-md-6">
                <div className="card shadow-lg border-0 p-4 h-100">
                  <FormAddress />
                </div>
              </div>

              <div className="col-md-6">
                <div className="card shadow-sm border-0 p-4 h-100">
                  <DataUser />
                </div>
              </div>

            </div>

            <div className="text-center mt-4">
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

export default Address;