
import DetailPageComponent from "@/Compoents/DetailPageComponent";

export default function ItemPage({ params }) {
  const { id } = params;  

  return (
    <div >
      <DetailPageComponent getId={id} />
      {/* <deepSeekCard/> */}
    </div>
  );
}
