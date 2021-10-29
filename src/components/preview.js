
export default function Preview(){
    return(
        <>
        <div id="preview" className="flex justify-center items-center m-8">
            <div className="grid grid-rows-3 grid-flow-col bg-widget rounded-3xl w-auto h-auto shadow-lg bg-opacity-60">
                <div className="row-span-3 flex w-auto h-auto">
                <img src="https://media.valorant-api.com/competitivetiers/edb72a72-7e6d-6010-9591-7c053bbdbf48/19/smallicon.png" 
                className="self-center object-contain lg:h-24 py-2 px-1 pl-3 filter drop-shadow-2xl"
                />
                </div>
                < div id="currentRankWrapper" className="row-span-3 col-span-1 m-2 pt-2 divide-y-2 divide-white divide-opacity-25">
                    <div id="current rank title" className="text-center lg:text-lg text-gray-200 font-medium font-Roboto text-opacity-90">
                     Rank
                    </div>
                    <div className="text-center lg:text-3xl font-semibold text-white py-1 font-Roboto" >
                        <h1>Dimond 2</h1>
                    </div>
                </div>
                <div id="recentGamesWrapper" className="row-span-3 col-span-1 m-2 pt-2 divide-y-2 divide-white divide-opacity-25" >
                    <div className=" text-center text-gray-200 font-medium font-Roboto lg:text-lg text-opacity-90">
                        Recent Games
                    </div>
                    <div className="lg:text-2xl text-center flex px-4 py-1 font-semibold font-Roboto">
                            <h1 className="text-widgetRed px-1 font-semibold">-12</h1>
                            <h1 className="text-widgetGreen px-1 font-semibold">+18</h1>
                            <h1 className="text-widgetGreen px-1 font-semibold">+22</h1>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}