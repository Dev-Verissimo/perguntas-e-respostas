import styled from 'styled-components'

export const Div = styled.div `

.yello{
    background-color: #ffb703;
}

section, .Modal{
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    gap: 20px;
    height: 100%;
    width: 100%;

    text-align: center;
}

section{
    justify-content: space-evenly;

    input{
        min-width: 50px;
        max-width: 74px;

        height: 50px;
        padding: 10px;
        box-sizing: border-box;

        font-size: 20px;
    }
}

.Modal > div:first-child{
    display: flex;
    flex-flow: column;
    gap: 20px;
}

form{
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;

    min-height: 270px;

    label{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;

        font-size: 22px;
    }



    
    &>div{
        display: flex;
        justify-content: space-between;
        width: 80%;
    }
}
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


            &.click{
                background-color: azure;
            }
            &.o0yello0:first-child{
                background-color: #ffb703;
            }

            /* &.0yello0, &.yello1:nth-child(2),&.yello2:nth-child(3), &.yello3:nth-child(4){
                background-color: #ffb703;
            } */

             &.blue{
                 background-color: #fb8500;
             }
        }
        .green{
            background-color: green;
            
        }
    
            
    
        
        
    }

`