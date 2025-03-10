import { useEffect, useState } from 'react';

function Game () {
    const [gameState1, setGameState1] = useState<boolean>(false); // Boolean for the state of the single player game
    const [gameState2, setGameState2] = useState<boolean>(false); // Boolean for the state of the 2 player game
    const [playerTurn, setPlayerTurn] = useState<number>(1); // Counter for player turn logic

    const [clickedArray, setClickedArray] = useState<boolean[]>(Array(9).fill(false)); // 3x3 Boolean array for tracking and limiting clicks on boxes
    const [board, setBoard] = useState<string[]>(Array(9).fill('')); // 3x3 String array for inserting X's and O's into jsx
    const [scoreBoard, setScoreBoard] = useState<number[]>(Array(9).fill(0)); // 3x3 scoreboard/number array for tracking score

    const [P1winner, setP1Winner] = useState<boolean>(false); // Boolean used to track winner
    const [P2winner, setP2Winner] = useState<boolean>(false); // Boolean used to track winner
    const [compWinner, setCompWinner] = useState<boolean>(false); // Boolean used to track winner


    // Handles the click event on the start button for 1 player game:
    const handleStart1: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setGameState1(true);
        setPlayerTurn(1);
        setGameState2(false);
        setBoard(Array(9).fill(''));
        setClickedArray(Array(9).fill(false));
        setScoreBoard(Array(9).fill(0));
        setP1Winner(false);
        setP2Winner(false);
``    };

    // Handles the click event on the start button for 2 player game:
    const handleStart2: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setGameState2(true);
        setPlayerTurn(1);
        setGameState1(false);
        setBoard(Array(9).fill(''));
        setClickedArray(Array(9).fill(false));
        setScoreBoard(Array(9).fill(0));
        setP1Winner(false);
        setP2Winner(false);
      };

    // Handles click event on 1st box
    const clickBox1 = (index: number) => {
        if (gameState1 && !clickedArray[0] && board[index] === '' || gameState2 && !clickedArray[0] && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = true
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? 'X' : 'O';
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
        if (gameState1 && !clickedArray[1] && board[index] === ''|| gameState2 && !clickedArray[1] && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = true
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? 'X' : 'O';
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
        if (gameState1 && !clickedArray[2] && board[index] === '' || gameState2 && !clickedArray[2] && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = true
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? 'X' : 'O';
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
        if (gameState1 && !clickedArray[3] && board[index] === '' || gameState2 && !clickedArray[3] && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = true
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? 'X' : 'O';
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
        if (gameState1 && !clickedArray[4] && board[index] === '' || gameState2 && !clickedArray[4] && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = true
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? 'X' : 'O';
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
        if (gameState1 && !clickedArray[5]  && board[index] === '' || gameState2 && !clickedArray[5]  && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = true
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? 'X' : 'O';
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
        if (gameState1 && !clickedArray[6] && board[index] === '' || gameState2 && !clickedArray[6] && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = true
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? 'X' : 'O';
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
        if (gameState1 && !clickedArray[7]  && board[index] === '' || gameState2 && !clickedArray[7]  && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = true
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? 'X' : 'O';
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
        if (gameState1 && !clickedArray[8]  && board[index] === '' || gameState2 && !clickedArray[8]  && board[index] === '') {
            setPlayerTurn(playerTurn + 1);
            setClickedArray((prevClicked) => {
                const newClickedArray = [...prevClicked];
                newClickedArray[index] = true
                return newClickedArray;
            });  
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[index] = playerTurn % 2 === 0 ? 'X' : 'O';
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

    // Random search algo for computer turns
    function randomSearch(array, target) {
        while (true) {
          const randomIndex = Math.floor(Math.random() * array.length);
          if (array[randomIndex] === target) {
            return randomIndex; 
          }
        }
      }
    
    // Singe player game logic was added second and uses similar logic with a settimeout and the random search algo
    useEffect (() => {
        if (gameState1 === true && playerTurn === 2) {
                const randomIndex = randomSearch(board, '');
                setTimeout(() => {
                if (board[randomIndex] !== 'X' && board[randomIndex] !== 'O')
                    setClickedArray((prevClicked) => {
                        const newClickedArray = [...prevClicked];
                        newClickedArray[randomIndex] = true
                        return newClickedArray;
                    }); 
                    setBoard((prevBoard) => {
                        const newBoard = [...prevBoard];
                        newBoard[randomIndex] = 'X';
                        return newBoard;
                    });  
                    setScoreBoard((prevScoreBoard) => {
                        const newScoreBoard = [...prevScoreBoard];
                        newScoreBoard[randomIndex] = 3;
                        return newScoreBoard;
                    });  
                    setPlayerTurn(playerTurn + 1);
                }, 1000);
        } else if (gameState1 === true && playerTurn === 4) {
                const randomIndex = randomSearch(board, '');
                setTimeout(() => {
                if (board[randomIndex] !== 'X' && board[randomIndex] !== 'O')
                    setClickedArray((prevClicked) => {
                        const newClickedArray = [...prevClicked];
                        newClickedArray[randomIndex] = true
                        console.log(newClickedArray)
                        return newClickedArray;
                    }); 
                    setBoard((prevBoard) => {
                        const newBoard = [...prevBoard];
                        newBoard[randomIndex] = 'X';
                        return newBoard;
                    });  
                    setScoreBoard((prevScoreBoard) => {
                        const newScoreBoard = [...prevScoreBoard];
                        newScoreBoard[randomIndex] = 3;
                        return newScoreBoard;
                    });  
                    setPlayerTurn(playerTurn + 1);
                }, 1000);
        } else if (gameState1 === true && playerTurn === 6) {
                const randomIndex = randomSearch(board, '');
                setTimeout(() => {
                if (board[randomIndex] !== 'X' && board[randomIndex] !== 'O')
                    setClickedArray((prevClicked) => {
                        const newClickedArray = [...prevClicked];
                        newClickedArray[randomIndex] = true
                        console.log(newClickedArray)
                        return newClickedArray;
                    }); 
                    setBoard((prevBoard) => {
                        const newBoard = [...prevBoard];
                        newBoard[randomIndex] = 'X';
                        return newBoard;
                    });  
                    setScoreBoard((prevScoreBoard) => {
                        const newScoreBoard = [...prevScoreBoard];
                        newScoreBoard[randomIndex] = 3;
                        return newScoreBoard;
                    });  
                    setPlayerTurn(playerTurn + 1);
                }, 1000);
        } else if (gameState1 === true && playerTurn === 8) {
                const randomIndex = randomSearch(board, '');
                setTimeout(() => {
                if (board[randomIndex] !== 'X' && board[randomIndex] !== 'O')
                    setClickedArray((prevClicked) => {
                        const newClickedArray = [...prevClicked];
                        newClickedArray[randomIndex] = true
                        console.log(newClickedArray)
                        return newClickedArray;
                    }); 
                    setBoard((prevBoard) => {
                        const newBoard = [...prevBoard];
                        newBoard[randomIndex] = 'X';
                        return newBoard;
                    });  
                    setScoreBoard((prevScoreBoard) => {
                        const newScoreBoard = [...prevScoreBoard];
                        newScoreBoard[randomIndex] = 3;
                        return newScoreBoard;
                    });  
                    setPlayerTurn(playerTurn + 1);
                }, 1000);
        } 
    }, [playerTurn]) 

    //Game winning logic:
    useEffect(() => {
        // Logic for when P1 Wins: 
        if (scoreBoard[0] === 1 && scoreBoard[1] === 1 && scoreBoard[2] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[3] === 1 && scoreBoard[4] === 1 && scoreBoard[5] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[6] === 1 && scoreBoard[7] === 1 && scoreBoard[8] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[0] === 1 && scoreBoard[3] === 1 && scoreBoard[6] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[1] === 1 && scoreBoard[4] === 1 && scoreBoard[7] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[2] === 1 && scoreBoard[5] === 1 && scoreBoard[8] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[0] === 1 && scoreBoard[4] === 1 && scoreBoard[8] === 1) {
            setP1Winner(true);
        } else if (scoreBoard[2] === 1 && scoreBoard[4] === 1 && scoreBoard[6] === 1) {
            setP1Winner(true);
        // Logic for when P2 Wins:
        } else if (scoreBoard[0] === 2 && scoreBoard[1] === 2 && scoreBoard[2] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[3] === 2 && scoreBoard[4] === 2 && scoreBoard[5] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[6] === 2 && scoreBoard[7] === 2 && scoreBoard[8] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[0] === 2 && scoreBoard[3] === 2 && scoreBoard[6] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[1] === 2 && scoreBoard[4] === 2 && scoreBoard[7] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[2] === 2 && scoreBoard[5] === 2 && scoreBoard[8] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[0] === 2 && scoreBoard[4] === 2 && scoreBoard[8] === 2) {
            setP2Winner(true);
        } else if (scoreBoard[2] === 2 && scoreBoard[4] === 2 && scoreBoard[6] === 2) {
            setP2Winner(true);
        // Logic for when Computer Wins:
        } else if (scoreBoard[0] === 3 && scoreBoard[1] === 3 && scoreBoard[2] === 3) {
            setCompWinner(true);
        } else if (scoreBoard[3] === 3 && scoreBoard[4] === 3 && scoreBoard[5] === 3) {
            setCompWinner(true);
        } else if (scoreBoard[6] === 3 && scoreBoard[7] === 3 && scoreBoard[8] === 3) {
            setCompWinner(true);
        } else if (scoreBoard[0] === 3 && scoreBoard[3] === 3 && scoreBoard[6] === 3) {
            setCompWinner(true);
        } else if (scoreBoard[1] === 3 && scoreBoard[4] === 3 && scoreBoard[7] === 3) {
            setCompWinner(true);
        } else if (scoreBoard[2] === 3 && scoreBoard[5] === 3 && scoreBoard[8] === 3) {
            setCompWinner(true);
        } else if (scoreBoard[0] === 3 && scoreBoard[4] === 3 && scoreBoard[8] === 3) {
            setCompWinner(true);
        } else if (scoreBoard[2] === 3 && scoreBoard[4] === 3 && scoreBoard[6] === 3) {
            setCompWinner(true);
        }
    }, [scoreBoard]);  

    // Condition for when P1 wins
    useEffect(() => {
        if (P1winner === true) {
            setGameState1(false);
            setGameState2(false);
            setClickedArray(Array(9).fill(true));
        }
    }, [P1winner]); 

    // Condition for when P2 wins
    useEffect(() => {
        if (P2winner === true) {
            setGameState1(false);
            setGameState2(false);
            setClickedArray(Array(9).fill(true));
        }
    }, [P2winner]); 

    // Condition for when computer wins
    useEffect(() => {
        if (compWinner === true) {
            setGameState1(false);
            setGameState2(false);
            setClickedArray(Array(9).fill(true));
        }
    }, [compWinner]); 


    //Clears board of previous game's value, allowing for players to review their final standing before reset
    const clearBoard: React.MouseEventHandler<HTMLButtonElement> = () => {
        reset();
    };

    // Resets state for the clear button
    const reset = () => {
        console.log('the game ended');
        setGameState1(false);
        setGameState2(false);
        setBoard(Array(9).fill(''));
        setClickedArray(Array(9).fill(false));
        setScoreBoard(Array(9).fill(0));
        setP1Winner(false);
        setP2Winner(false);
        setCompWinner(false);
        setPlayerTurn(1);
    }

    return (
        <>
        <div className='buttons'>
            <button className='button' onClick={handleStart1}>1-Player Game</button>
            <button className='button' onClick={handleStart2}>2-Player Game</button>
        </div>
        <div className='turn'>
            {gameState2 ? (
                playerTurn % 2 === 0? (
                    <h4>Player 2's Turn!</h4>
                ) : (
                    <h4>Player 1's Turn!</h4>
                )
            ) : (
                <></>
            )}
            {gameState1 ? (
                playerTurn % 2 === 0? (
                    <h4>Computer's Turn</h4>
                ) : (
                    <h4>Your Turn!</h4>
                )
            ) : (
                <></>
            )}
        </div>
        <table className='table'>
            <tbody>
            <tr>
                <td className='td1' onClick={(event) => {clickBox1(0)}} > {board[0]}</td>
                <td className='td1' onClick={(event) => {clickBox2(1)}} > {board[1]}</td>
                <td className='td2' onClick={(event) => {clickBox3(2)}} > {board[2]}</td>
            </tr>
            <tr>
                <td className='td1' onClick={(event) => {clickBox4(3)}} > {board[3]}</td>
                <td className='td1' onClick={(event) => {clickBox5(4)}} > {board[4]}</td>
                <td className='td2' onClick={(event) => {clickBox6(5)}} > {board[5]}</td>
            </tr>
            <tr>
                <td className='td3' onClick={(event) => {clickBox7(6)}} > {board[6]}</td>
                <td className='td3' onClick={(event) => {clickBox8(7)}} > {board[7]}</td>
                <td className='td4' onClick={(event) => {clickBox9(8)}} > {board[8]}</td>
            </tr>
            </tbody>
        </table>
        <div className='winner'>
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
            {compWinner ? (
                    <h3>Computer Wins!</h3>
                ) : (
                    <></>
                )
            }
        </div>
        <div>
            {playerTurn === 10 || P1winner === true || P2winner === true || compWinner === true ? (
                <button className='button' onClick={clearBoard}>
                    Clear Board
                </button>
                ) : (<></>)
            }
        </div>
        </>
    )
}

export default Game