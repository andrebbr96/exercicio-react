export default function Doce({ doce }) {

    return (
      <div key={doce.id} id={doce.id} className="doce">
        {/* <h5>Doce delicioso</h5> */}
        <p>{doce.nome}</p>
        <div>
            <p>{doce.tipo}</p>
        </div>
      </div>
    );
  }
  