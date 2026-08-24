import {React, Fragment} from 'react'
import './hashgame.css'


export const HashGame = () => {
    let isCircleTurn
    let victoryCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]

    //Init the game
    const startGame = () => {
        isCircleTurn = false;

        document.querySelector("[data-rs]").addEventListener('click', startGame)
        document.querySelector("[data-wm]").classList.remove("show-message")
        
        for(const cell of document.querySelectorAll("[data-cell]")) {
            cell.removeEventListener('click', handleClick)
            cell.addEventListener('click', handleClick, {once: true})
            cell.classList.remove('x')
            cell.classList.remove('circle')
        }
        
        setBoardHoverClass()

    }
    const endGame = (isDraw) => {
        if(isDraw) {
            document.querySelector("#winMsg").innerText = "Empate!"
        } else {
            document.querySelector("#winMsg").innerText = isCircleTurn
             ? 'O venceu!' 
             : 'X venceu!'
        }
        document.querySelector("[data-wm]").classList.add('show-message')
    }
  
    const placeMark = (cell, classToAdd) => {
        cell.classList.add(classToAdd)
    }

    const checkForWin = (currentPlayer) => {
        return victoryCombination.some(combination => {
            return combination.every(index => {
                return document.querySelectorAll("[data-cell]")[index].classList.contains(currentPlayer)
            })
        })
    }

    const checkForDraw = () => {
        return [...document.querySelectorAll("[data-cell]")].every(cell => {
            return cell.classList.contains("x") || cell.classList.contains("circle")
        })
    }

    const setBoardHoverClass = () => {
        document.querySelector("[data-bd]").classList.remove("circle")
        document.querySelector("[data-bd]").classList.remove("x")

        isCircleTurn 
            ? document.querySelector("[data-bd]").classList.add("circle")
            : document.querySelector("[data-bd]").classList.add("x") 
    }

    //Swap Players
    const swapTurns = () => {
        isCircleTurn = !isCircleTurn
        setBoardHoverClass()
    }

    // Clicks
    const handleClick = (e) => {
        //Input mark
        const cell = e.target
        const classToAdd = isCircleTurn ? 'circle' : 'x'
        placeMark(cell, classToAdd)

        //Check victory
        const isWin = checkForWin(classToAdd)

        //Check a draw
        const isDraw = checkForDraw()
        if(isWin) {
            endGame(false)
        } else if(isDraw) {
            endGame(true)
        } else {
            //Change mark
            swapTurns()
        }

    }

    return (
        <Fragment>
            <div className="container-fluid hashGameBox">

                <div className="board" id="bd" data-bd>
                    <div className="cell"data-cell></div>
                    <div className="cell"data-cell></div>
                    <div className="cell"data-cell></div>

                    <div className="cell"data-cell></div>
                    <div className="cell"data-cell></div>
                    <div className="cell"data-cell></div>

                    <div className="cell"data-cell></div>
                    <div className="cell"data-cell></div>
                    <div className="cell"data-cell></div>
                </div>

                <div className="winning-message"data-wm>
                    <p className="winnig-message-text" id="winMsg"></p>
                    <button className="winning-message-btn"data-rs>Reiniciar !</button>
                </div>
            </div>
            <script>
                {setTimeout(startGame, 1000)}
            </script>
        </Fragment>
    )
}