import "./styles.scss";
import getRuta from "./getData";
import RutaCliente from "../RutasClient";

export default async function Ruta({ params }: { params: { location: string } }) {
  const locationParam = params.location;
  const response = await getRuta();

  return (
    <>
      <div className="mainDiv"></div>
      <RutaCliente response={response} locationParam={locationParam} />
    </>
  );
}
