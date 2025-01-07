// use state for button to start game
// game starts with useffect with condition based on previous state of start button, enacts while loop for game logic, enacts player turn function for tracking turns
// while loop tracks state of 9 variable tied to areas on screen
import { useEffect, useState } from 'react';

function Game () {
    const [gameState, setGameState] = useState<boolean>(false); // Boolean for the state of the game
    const [playerTurn, setPlayerTurn] = useState<number>(1); // Counter for player turn logic 

    const [clicked1, setClicked1] = useState<boolean>(false); // Boolean for 1st box
    const [clicked2, setClicked2] = useState<boolean>(false); // Boolean for 2nd box
    const [clicked3, setClicked3] = useState<boolean>(false); // Boolean for 3rd box
    const [clicked4, setClicked4] = useState<boolean>(false); // Boolean for 4th box
    const [clicked5, setClicked5] = useState<boolean>(false); // Boolean for 5th box
    const [clicked6, setClicked6] = useState<boolean>(false); // Boolean for 6th box
    const [clicked7, setClicked7] = useState<boolean>(false); // Boolean for 7th box
    const [clicked8, setClicked8] = useState<boolean>(false); // Boolean for 8th box
    const [clicked9, setClicked9] = useState<boolean>(false); // Boolean for 9th box


    // Handles the click event on the start button:
    const handleStart: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setGameState(true)
      };
    
    // Handles click event on 1st box
    const clickTurn1 = (event: React.MouseEvent<HTMLTableCellElement>) => {
        if (gameState && !clicked1) {
            setPlayerTurn(playerTurn + 1);
            setClicked1(true);
        }
    }

    // Handles click event on 2nd box
    const clickTurn2 = (event: React.MouseEvent<HTMLTableCellElement>) => {
        if (gameState && !clicked2) {
            setPlayerTurn(playerTurn + 1);
            setClicked2(true);
        }
    }

    // Handles click event on 3rd box
    const clickTurn3 = (event: React.MouseEvent<HTMLTableCellElement>) => {
        if (gameState && !clicked3) {
            setPlayerTurn(playerTurn + 1);
            setClicked3(true);
        }
    }

    // Handles click event on 4th box
    const clickTurn4 = (event: React.MouseEvent<HTMLTableCellElement>) => {
        if (gameState && !clicked4) {
            setPlayerTurn(playerTurn + 1);
            setClicked4(true);
        }
    }

    // Handles click event on 5th box
    const clickTurn5 = (event: React.MouseEvent<HTMLTableCellElement>) => {
        if (gameState && !clicked5) {
            setPlayerTurn(playerTurn + 1);
            setClicked5(true);
        }
    }

    // Handles click event on 6th box
    const clickTurn6 = (event: React.MouseEvent<HTMLTableCellElement>) => {
        if (gameState && !clicked6) {
            setPlayerTurn(playerTurn + 1);
            setClicked6(true);
        }
    }

    // Handles click event on 7th box
    const clickTurn7 = (event: React.MouseEvent<HTMLTableCellElement>) => {
        if (gameState && !clicked7) {
            setPlayerTurn(playerTurn + 1);
            setClicked7(true);
        }
    }

    // Handles click event on 8th box
    const clickTurn8 = (event: React.MouseEvent<HTMLTableCellElement>) => {
        if (gameState && !clicked8) {
            setPlayerTurn(playerTurn + 1);
            setClicked8(true);
        }
    }

    // Handles click event on 9th box
    const clickTurn9 = (event: React.MouseEvent<HTMLTableCellElement>) => {
        if (gameState && !clicked9) {
            setPlayerTurn(playerTurn + 1);
            setClicked9(true);
        }
    }

      useEffect(() => {
        if (playerTurn === 10) {
            console.log('the game ended')
            setPlayerTurn(0)
            setGameState(false)
        }   
    }, [playerTurn]);     

    return (
        <>
            <button onClick={handleStart}>
                Start
            </button>
            <div>
            {gameState ? (
                playerTurn % 2 === 0 ? (
                    <h3>Player 2's Turn!</h3>
                ) : (
                    <h3>Player 1's Turn!</h3>
                )
            ) : (
                <></>
            )}
            </div>
            
            <table>
                <tbody>
                <tr>
                    <td onClick={(event) => {clickTurn1(event); setClicked1(true)}} >boxA1</td>
                    <td onClick={(event) => {clickTurn2(event); setClicked2(true)}} >boxA2</td>
                    <td onClick={(event) => {clickTurn3(event); setClicked3(true)}} >boxA3</td>
                </tr>
                <tr>
                    <td onClick={(event) => {clickTurn4(event); setClicked4(true)}} >boxB1</td>
                    <td onClick={(event) => {clickTurn5(event); setClicked5(true)}} >boxB2</td>
                    <td onClick={(event) => {clickTurn6(event); setClicked6(true)}} >boxB3</td>
                </tr>
                <tr>
                    <td onClick={(event) => {clickTurn7(event); setClicked7(true)}} >boxC1</td>
                    <td onClick={(event) => {clickTurn8(event); setClicked8(true)}} >boxC2</td>
                    <td onClick={(event) => {clickTurn9(event); setClicked9(true)}} >boxC3</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default Game