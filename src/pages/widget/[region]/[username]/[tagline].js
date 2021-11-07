import axios from 'axios';
import { useClientRouter } from "use-client-router";
import useSWR from 'swr'

export default function UserInfo() {
    const router = useClientRouter();
    const { region, username, tagline } = router.query;

    const { data, revalidate } = useSWR(
        `/api/current-rank?region=${region}&username=${username}&tagline=${tagline}`,
        url => axios.get(url).then(res => res.data),
        {
            initialData:{
                currenttier: 0,
                currenttierpatched: 'iron',
                ranking_in_tier: 0,
                mmr_change_0: 0,
                mmr_0_css: "text-white",
                mmr_change_1: 0,
                mmr_1_css: "text-white",
                mmr_change_2: 0,
                mmr_2_css: "text-white",
                rank_image: null,
            },
            revalidateOnFocus: false,
			refreshInterval: 15000,
			refreshWhenHidden: true,
			shouldRetryOnError: false,
            
            onError: async error => {
				if (error.response.status == 500){
                    router.push("/404")
                }
                else{
				revalidate()
                }
			},
        } 
    )
    
    return (
    
    <div className="app">
        <div id="widget-wrapper" className="flex h-screen justify-center items-center">
            <div id="widget" className="grid grid-rows-3 grid-flow-col bg-widget rounded-3xl w-auto h-auto shadow-lg bg-opacity-80">
                <div id="imageWrapper" className="row-span-3 flex w-auto h-auto">
                    <img src={data?.rank_image} className="self-center object-contain h-24 py-2 px-1 pl-3 filter drop-shadow-2xl"/>
                </div>
                < div id="currentRankWrapper" className="row-span-3 col-span-1 m-2 pt-2 divide-y-2 divide-white divide-opacity-25">
                    <div id="current rank title" className="text-center text-lg text-gray-200 font-medium font-Roboto text-opacity-90">
                        Current Rank
                    </div>
                    <div className="text-center text-3xl font-semibold text-white py-1 font-Roboto" >
                        <h1>{data?.currenttierpatched}</h1>
                    </div>
                </div>
                <div id="recentGamesWrapper" className="row-span-3 col-span-1 m-2 pt-2 divide-y-2 divide-white divide-opacity-25" >
                    <div className=" text-center text-gray-200 font-medium font-Roboto text-lg text-opacity-90">
                        Recent Games
                    </div>
                    <div className="text-2xl text-center flex px-4 py-1 font-semibold font-Roboto">
                            <h1 className= {data?.mmr_0_css} id="mmr_0">{data?.mmr_change_0}</h1>
                            <h1 className= {data?.mmr_1_css} id="mmr_1">{data?.mmr_change_1}</h1>
                            <h1 className= {data?.mmr_2_css} id="mmr_2">{data?.mmr_change_2}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}