"use client";
import "./styles.scss";
export default function ActividadClient() {
  return (
    <>
      <div className="mainDivHammam"></div>
      <div className=" bg-gradient-to-br from-[#fbeee6] via-[#f9f6f2] to-[#e5e7eb] py-12">
        <div className="flex justify-center items-center tituloRutas text-4xl font-extrabold text-[#471919] tracking-wider drop-shadow-lg mb-8 text-center">
          <p>Hammam tradicional marroquí</p>
        </div>
        <p className="text-center max-w-6xl mx-auto subTitle font-bold italic mb-2">
          Una pausa de bienestar que limpia el cuerpo y calma el alma
        </p>
        <hr className="border-t-2 border-[#e5e7eb] w-104 mx-auto mb-8 opacity-60 rounded-full" />
        <div className="">
          <p className="text-center max-w-6xl mx-auto subTitle">
            Vivir la experiencia de un hammam en Marruecos no es solo disfrutar
            de un baño relajante, es sumergirse en una de las tradiciones más
            antiguas y sagradas del mundo árabe. El hammam ha sido, durante
            siglos, un espacio de encuentro, purificación y descanso. En
            Marrakech, puedes experimentarlo en su versión más auténtica, donde
            el vapor, el jabón negro, el guante de kessa y el agua caliente se
            combinan para ofrecer una limpieza profunda del cuerpo y una
            sensación de renovación total. Al entrar, el bullicio de la ciudad
            desaparece. Todo es calma, calor y ritual. Las manos expertas de las
            mujeres o los terapeutas locales te guían paso a paso: exfoliación,
            envoltura con ghassoul, masajes relajantes con aceites naturales...
            sales como nuevo, tanto por fuera como por dentro. Es un momento de
            cuidado personal, pero también una forma de conectar con la cultura
            marroquí desde lo más íntimo y auténtico.
          </p>
        </div>
      </div>
    </>
  );
}
