import { Geist, Geist_Mono, Roboto , Poppins} from "next/font/google";
const roboro = Roboto ({
  weight: ["400"],
  subsets: ["latin"]
})
export default function Home() {
  return (
    <div className={roboro.className}>
      Hellow Banglades
    </div>
  );
}
