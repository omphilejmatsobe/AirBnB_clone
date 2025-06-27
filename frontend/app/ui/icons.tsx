import Image from "next/image";

type props={
  h:number,
  w:number,
  className:string,
  icon:source
  name:string
}

export enum source
{
  moon = "/icons/moon.svg",
  sun = "/icons/sun.svg",
  btnArrow = "/icons/btnarrow.svg",
  git = "/icons/github-2.svg",
  peerlist = "/icons/peerlist.svg",
  x = "/icons/x.svg",
  linkedin = "/icons/linkedin.svg",
  filter = "/icons/filter.svg",
  dropdown = "/icons/dropdown.svg",
  sort = "/icons/sort.svg",
}


export function Icon({h, w, className, icon, name}:props) {
  return (
    <Image width={h} height={w} src={icon} alt={name} className={`${className} pointer-events-none`}/>
  )
}
