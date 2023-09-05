import { useEffect, useState } from 'react';
import { NavBar } from '../../components/UI/NavBar/NavBar';
import { GameCardsContainer } from '../../components/UI/PageSection/GameCardsContainer';
import { useFetching } from '../../components/hooks/useFetching';
import classes from './PCGamesPage.module.css'
import { RequestService } from '../../API/RequestService';


export const PCGamesPage = () => {

    const [gamesData, setGamesData] = useState([]);

    const [fetchGamesByPlatform, isLoadingGamesByPlatform, errorPlatformGames] = useFetching(async (platform) => {
        const response = await RequestService.getGamesByPlatform(platform)
        setGamesData(response.data)
        console.log(response.data)
    })

    

    useEffect(() => {
        fetchGamesByPlatform('pc')
    },[])

    return (
        <div className={classes.container}>

            <NavBar positioning={classes.navBarPositioning} />

            <GameCardsContainer title={'All PC Games'} gamesData={gamesData} elementsPositioning={classes.gamesCardsPositioning}/>


        </div>
    )


}