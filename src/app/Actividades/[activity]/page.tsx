import ActividadClient from "./ActivityClient";

// ✅ No se usa tipo PageProps externo
export default async function Page({params}: {params: Promise<{ activity: string }>}) {
  const { activity } = await params;
  return <ActividadClient activity={activity} />;
}
