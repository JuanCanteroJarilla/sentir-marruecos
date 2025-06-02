import ActividadClient from "./ActivityClient";

export default function Page({ params }: { params: { activity: string } }) {
  return <ActividadClient activity={{ activity: params.activity }} />;
}