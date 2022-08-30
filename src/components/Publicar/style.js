import styled from "styled-components";

export const Publico = styled.div`
    *{
        box-sizing: border-box;
        margin: 0;
    }

    html {
        font-size: 62.5%;
        
    }
    
    // .filho2 {
    //     background-color: black;
    //     width: 100vw;    
    //     height: 8rem;
    //     display: flex;
    //     justify-content: flex-end;
    //     align-items: center;
    //     padding-right: 4rem;
    // }
   

    input {
        border-radius: 2rem;
        width: 40rem;
        height: 5rem;
    }

    
    .seta{
        background-color: transparent;
        border: transparent;
        margin-left: 3rem;
        margin-right: 5rem;
        margin-top: 2.3rem; 
        display: flex;
        width: 5.1rem;
        height: 5.1rem;
        align-items: center;
    }

    .proximo {
        background-color: #1145FF;
        color: white;
        width: 208px;
        height: 73px;   
        border-radius: 5rem;        
        font-size:1.5rem;
        display:flex;
        bottom: 5rem;
        border: none;
        justify-content: center; 
        align-items: center;
        
        
    }

    .botao {
        width:100%;
        display:flex;
        justify-content: end;
        padding-top: 25px;
    
       

    }

    .main{
       
        min-height: calc(100vh - 8rem - 8rem - 0.1rem);
        display:  grid;
        justify-content: center;
        align-items: center;
        // margin-top: 5rem;
        // margin-right:10rem;
        padding-bottom: 5rem;
        

    }

    .corpoartigo {
        display: flex;
        flex-direction: column;
    }

    .titulo {
        text-align: center;
        border-radius: 3rem;
        margin-bottom: 1rem;
    }

    .artigo {
        height: 40rem;
        text-align: start;
        border-radius: 1rem;
        padding-left: 1rem;
        resize: none;
    }

`;