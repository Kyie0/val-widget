 import axios from 'axios'

export default async function({ query: { region, username, tagline } }, res){
    const assetURL = 'https://valorant-api.com/v1/competitivetiers/edb72a72-7e6d-6010-9591-7c053bbdbf48'
    const baseURL = 'https://api.henrikdev.xyz/valorant/v1/mmr-history'
    try{
        const asset = await axios .get(assetURL).then(res => res.data)       
        const response = await axios .get(`${baseURL}/${region}/${username}/${tagline}`).then(res => res.data)
        
        for ( let i = 0; i < 3; i++){
            response.data[i].css = "text-widgetRed px-1 font-semibold";
            
            if (response.data[i].mmr_change_to_last_game > 0){
                
                response.data[i].mmr_change_to_last_game = '+' + response.data[i].mmr_change_to_last_game;
                
                response.data[i].css = "text-widgetGreen px-1 font-semibold";
            }
        }

        res.json({
            currenttier: response.data[0].currenttier,
            currenttierpatched: response.data[0].currenttierpatched,
            ranking_in_tier: response.data[0].ranking_in_tier,
            mmr_change_0: response.data[0].mmr_change_to_last_game,
            mmr_0_css:  response.data[0].css,
            mmr_change_1: response.data[1].mmr_change_to_last_game,
            mmr_1_css:  response.data[1].css,
            mmr_change_2: response.data[2].mmr_change_to_last_game,
            mmr_2_css:  response.data[2].css,
            elo: response.data[0].elo, 
            rank_image: asset.data.tiers[response.data[0].currenttier].largeIcon,
        })
    }
    
    catch (error) {
		console.log(error)
		throw error
	}
}