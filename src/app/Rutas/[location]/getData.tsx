export default async function getRuta() {
  const res = await fetch(
    `https://talented-smile-975c2aec44.strapiapp.com/api/rutas?populate=*&filters[name][$eq]=ciudades_imperiales`,
    {
      headers: {
        Authorization: `Bearer 5aef1a91c8570a3d27e4b0a791a6e08bc1e26f88f090e5adcc7c393299122470b1ce3f7383bccd1b1bc43b6c021668418c693ca09db8f085011aeb47aea1fb7f0e4c766bf4391c100632a47ebb00a1e126b92f201354cb5be86750ddf7b66e292992250037bcc587e7802add48a912b85a0f88c94a79f5d982db1551a9df5c42`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  console.log(data);
  const tour = data.data[0];

  return tour;
}
