import styled from 'styled-components'

export const Div = styled.div `
        box-sizing: border-box;
    overflow-x: hidden;

    h1{
        color: #ffb703;
        text-align: center;

    }


    .card{
        /* width: 90vw; */
        box-sizing: border-box;
        margin: 0 auto;
        padding: 10px;

        color: #fb8500;
        


        
        text-align: center;


        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        &>div{
            background-color: #8ecae6;
            box-sizing: border-box;
            min-width: 100%;
            width: 100vw;
            height: 100vh;

            display: flex;
            flex-flow: column;
            justify-content: space-evenly;


            h2{
                max-width: 80%;
                margin: 0 auto;
            }
        }

        
    }

    ul{
        list-style: none;
        display: flex;
        flex-flow: column ;
        justify-content: center;
        align-items: center;
        gap: 10px;



        li{
            width: 70%;
            background-color: azure;
            height: 60px;

            font-size: 1.6rem;

            display: flex;
            align-items: center;
            justify-content: center;

        }
        
    }

`