import { useState } from "react";
import { useHeroStonesQuery } from "../api/HeroStonesQuery";
import Layout from "../components/Layout";
import {DollarSign,Eye,MonitorCheck} from "lucide-react";
import Form from "../components/Form";
import ViewComponent from "../components/ViewComponent";
const HeroStones = () => {
    const {data:heroStones,isLoading:isHeroStonesLoading} = useHeroStonesQuery();
    const [addArticle,setAddArticle] = useState(false); 
    const [selectedArticle,setSelectedArticle] = useState(null);
    const [viewArticle,setViewArticle] = useState(false);
    console.log("heroStones", heroStones);
    return(
        <>
        <Layout>
            <div className="p-5 h-screen overflow-y-hidden">
                <div className="flex w-full items-center justify-between">
                <p className="text-[35px] text-[#2e2b2b]">Hero Stones Articles are listed below</p>
                <button className="ml-5 rounded-md bg-[#2e2b2b] px-3 py-1 text-white cursor-pointer font-semibold"
                onClick={()=>{setAddArticle(true)}}
                >Add Articles</button>
                </div>
                <div className="mt-10 p-5 max-h-[calc(100vh-200px)] overflow-y-auto overflow-x-hidden">
                    {heroStones?.map((data:any)=>(
                        <div
  key={data?._id}
  className="group relative w-full h-48 mt-6 rounded-xl 
  bg-gradient-to-br from-[#f5f1e6] to-[#e2dac7]
  shadow-[8px_8px_20px_rgba(0,0,0,0.2)]
  transition-all duration-300
  hover:-translate-y-1 hover:rotate-[0.5deg]
  hover:shadow-[12px_12px_25px_rgba(0,0,0,0.3)]
  cursor-pointer overflow-hidden"
>

  {/* Book Spine */}
  <div className="absolute left-0 top-0 h-full w-6 
  bg-gradient-to-b from-[#3e2f1c] to-[#2b1f12] 
  shadow-inner">
  </div>

  {/* Page Edge Effect */}
  <div className="absolute right-0 top-0 h-full w-2 
  bg-gradient-to-l from-white/70 to-transparent">
  </div>

  {/* Inner Shadow Overlay */}
  <div className="absolute inset-0 rounded-xl 
  shadow-inner pointer-events-none"></div>

  {/* Content */}
  <div className="pl-10 pr-8 py-6 h-full flex flex-col justify-between">

    <div>
      <p className="text-xl font-serif font-bold text-[#3b2f1b] tracking-wide">
        {data?.articleName}
      </p>
      <p className="text-sm mt-3 text-[#6b5a3a] italic">
        by {data?.authorName}
      </p>
    </div>

    <div className="flex justify-end gap-6">
      <Eye 
      onClick={()=>{setSelectedArticle(data);setViewArticle(true)}}
        size={20} 
        className="text-[#4b3a1f] hover:scale-110 transition" 
      />
      <DollarSign 
        size={20} 
        className="text-[#4b3a1f] hover:scale-110 transition" 
      />
    </div>

  </div>
</div>


                    ))
                    }
                </div>
            </div> 
        </Layout>
        {addArticle && (
          <Form
          onClose={() => setAddArticle(false)}
          id={heroStones?.[0]?._id}
          />
        )}
        {viewArticle && (
          <ViewComponent
          selectedArticle={selectedArticle}
          />
        )}
        </>
    )
}

export default HeroStones;

