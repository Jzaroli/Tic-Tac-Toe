// use state for button to start game
// game starts with useffect with condition based on previous state of start button, enacts while loop for game logic, enacts player turn function for tracking turns
// while loop tracks state of 9 variable tied to areas on screen
import { useEffect, useState } from 'react';


function Game () {
    const [gameState, setGameState] = useState<boolean>(false); // Boolean for the state of the game
    const [playerTurn, setPlayerTurn] = useState<number>(1); // Counter for player turn logic 

    const [clickedArray, setClickedArray] = useState<boolean[]>(Array(9).fill(false)); // 3x3 Boolean array for tracking and limiting clicks on boxes
    const [board, setBoard] = useState<string[]>(Array(9).fill('')); // 3x3 String array for inserting X's and O's into jsx
    const [scoreBoard, setScoreBoard] = useState<number[]>(Array(9).fill(0)); // 3x3 scoreboard/number array for tracking score

    const [P1winner, setP1Winner] = useState<boolean>(false); // Boolean used to track winner
    const [P2winner, setP2Winner] = useState<boolean>(false); // Boolean used to track winner


    // Handles the click event on the start button:
    const handleStart: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setGameState(true)
      };

    // Handles click event on 1st box
    const clickBox1 = (index: number) => {
        if (gameState && !clickedArray[0] && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = false
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? "X" : "O";
                return newBoard;
            });
            setScoreBoard((prevScoreBoard) => {
                const newScoreBoard = [...prevScoreBoard];
                if (playerTurn % 2 === 0) {
                    newScoreBoard[index] = 2
                } else {
                    newScoreBoard[index] = 1
                }
                return newScoreBoard;
            });  
        } 
    }
    // Handles click event on 2nd box
    const clickBox2 = (index: number) => {
        if (gameState && !clickedArray[1] && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = false
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? "X" : "O";
                return newBoard;
            });   
            setScoreBoard((prevScoreBoard) => {
                const newScoreBoard = [...prevScoreBoard];
                if (playerTurn % 2 === 0) {
                    newScoreBoard[index] = 2
                } else {
                    newScoreBoard[index] = 1
                }
                return newScoreBoard;
            });  
        }
    }
    // Handles click event on 3rd box
    const clickBox3 = (index: number) => {
        if (gameState && !clickedArray[2] && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = false
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? "X" : "O";
                return newBoard;
            });
            setScoreBoard((prevScoreBoard) => {
                const newScoreBoard = [...prevScoreBoard];
                if (playerTurn % 2 === 0) {
                    newScoreBoard[index] = 2
                } else {
                    newScoreBoard[index] = 1
                }
                return newScoreBoard;
            });  
        }
    }
    // Handles click event on 4th box
    const clickBox4 = (index: number) => {
        if (gameState && !clickedArray[3] && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = false
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? "X" : "O";
                return newBoard;
            });
            setScoreBoard((prevScoreBoard) => {
                const newScoreBoard = [...prevScoreBoard];
                if (playerTurn % 2 === 0) {
                    newScoreBoard[index] = 2
                } else {
                    newScoreBoard[index] = 1
                }
                return newScoreBoard;
            });            
        }
    }
    // Handles click event on 5th box
    const clickBox5 = (index: number) => {
        if (gameState && !clickedArray[4] && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = false
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? "X" : "O";
                return newBoard;
            });
            setScoreBoard((prevScoreBoard) => {
                const newScoreBoard = [...prevScoreBoard];
                if (playerTurn % 2 === 0) {
                    newScoreBoard[index] = 2
                } else {
                    newScoreBoard[index] = 1
                }
                return newScoreBoard;
            });             
        }
    }
    // Handles click event on 6th box
    const clickBox6 = (index: number) => {
        if (gameState && !clickedArray[5]  && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = false
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? "X" : "O";
                return newBoard;
            }); 
            setScoreBoard((prevScoreBoard) => {
                const newScoreBoard = [...prevScoreBoard];
                if (playerTurn % 2 === 0) {
                    newScoreBoard[index] = 2
                } else {
                    newScoreBoard[index] = 1
                }
                return newScoreBoard;
            });           
        }
    }
    // Handles click event on 7th box
    const clickBox7 = (index: number) => {
        if (gameState && !clickedArray[6]  && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = false
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? "X" : "O";
                return newBoard;
            });
            setScoreBoard((prevScoreBoard) => {
                const newScoreBoard = [...prevScoreBoard];
                if (playerTurn % 2 === 0) {
                    newScoreBoard[index] = 2
                } else {
                    newScoreBoard[index] = 1
                }
                return newScoreBoard;
            });             
        }
    }
    // Handles click event on 8th box
    const clickBox8 = (index: number) => {
        if (gameState && !clickedArray[7]  && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = false
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? "X" : "O";
                return newBoard;
            });  
            setScoreBoard((prevScoreBoard) => {
                const newScoreBoard = [...prevScoreBoard];
                if (playerTurn % 2 === 0) {
                    newScoreBoard[index] = 2
                } else {
                    newScoreBoard[index] = 1
                }
                return newScoreBoard;
            });           
        }
    }
    // Handles click event on 9th box
    const clickBox9 = (index: number) => {
        if (gameState && !clickedArray[8]  && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = false
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? "X" : "O";
                return newBoard;
            });     
            setScoreBoard((prevScoreBoard) => {
                const newScoreBoard = [...prevScoreBoard];
                if (playerTurn % 2 === 0) {
                    newScoreBoard[index] = 2
                } else {
                    newScoreBoard[index] = 1
                }
                return newScoreBoard;
            });        
        }
    }

    //Resets game after 9 turns
    useEffect(() => {
        console.log(playerTurn)
        if (playerTurn === 11) {
            reset();
        }
    }, [playerTurn]);
    
    useEffect(() => {
        // console.log()
        if (scoreBoard[0] === 2 && scoreBoard[1] === 2 && scoreBoard[2] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[0] === 1 && scoreBoard[1] === 1 && scoreBoard[2] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[3] === 2 && scoreBoard[4] === 2 && scoreBoard[5] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[3] === 1 && scoreBoard[4] === 1 && scoreBoard[5] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[6] === 2 && scoreBoard[7] === 2 && scoreBoard[8] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[6] === 1 && scoreBoard[7] === 1 && scoreBoard[8] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[0] === 2 && scoreBoard[3] === 2 && scoreBoard[6] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[0] === 1 && scoreBoard[3] === 1 && scoreBoard[6] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[1] === 2 && scoreBoard[4] === 2 && scoreBoard[7] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[1] === 1 && scoreBoard[4] === 1 && scoreBoard[7] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[2] === 2 && scoreBoard[5] === 2 && scoreBoard[8] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[2] === 1 && scoreBoard[5] === 1 && scoreBoard[8] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[0] === 2 && scoreBoard[4] === 2 && scoreBoard[8] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[0] === 1 && scoreBoard[4] === 1 && scoreBoard[8] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[2] === 2 && scoreBoard[4] === 2 && scoreBoard[6] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[2] === 1 && scoreBoard[4] === 1 && scoreBoard[6] === 1) {
            setP1Winner(true);
        }
    }, [scoreBoard]);  

    //Clears board of previous game's value, allowing for players to review their final standing before reset
    const clearBoard: React.MouseEventHandler<HTMLButtonElement> = () => {
        reset();
    };

    const reset = () => {
        console.log('the game ended')
        setPlayerTurn(1);
        setGameState(false);
        setBoard(Array(9).fill(''));
        setClickedArray(Array(9).fill(false));
        setScoreBoard(Array(9).fill(0));
        setP1Winner(false);
        setP2Winner(false);
    }

    return (
        <>
            <button onClick={handleStart}>
                Play
            </button>
            <div>
                {gameState ? (
                    playerTurn % 2 === 0? (
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
                    <td onClick={(event) => {clickBox1(0)}} >A1 {board[0]}</td>
                    <td onClick={(event) => {clickBox2(1)}} >A2 {board[1]}</td>
                    <td onClick={(event) => {clickBox3(2)}} >A3 {board[2]}</td>
                </tr>
                <tr>
                    <td onClick={(event) => {clickBox4(3)}} >B1 {board[3]}</td>
                    <td onClick={(event) => {clickBox5(4)}} >B2 {board[4]}</td>
                    <td onClick={(event) => {clickBox6(5)}} >B3 {board[5]}</td>
                </tr>
                <tr>
                    <td onClick={(event) => {clickBox7(6)}} >C1 {board[6]}</td>
                    <td onClick={(event) => {clickBox8(7)}} >C2 {board[7]}</td>
                    <td onClick={(event) => {clickBox9(8)}} >C3 {board[8]}</td>
                </tr>
                </tbody>
            </table>
            <div>
                {P1winner ? (
                        <h3>Player 1 Wins!</h3>
                    ) : (
                        <></>
                    )
                }
                {P2winner ? (
                        <h3>Player 2 Wins!</h3>
                    ) : (
                        <></>
                    )
                }
            </div>
            <div>
                {playerTurn === 10 || P1winner === true || P2winner === true ? (
                    <button onClick={clearBoard}>
                        Clear Board
                    </button>
                    ) : (<></>)
                }
            </div>
        </>
    )
}

export default Game