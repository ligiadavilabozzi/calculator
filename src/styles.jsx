import styled from 'styled-components'

export const Main = styled.div`
width: 320px;
height: 520px;
position: relative;
background: black;
display: flex;
flex-direction: column;
box-shadow: 0px 0px 20px 0px #aaa;
`

export const Display = styled.div`
color: white;
background: #1c191c;
line-height: 130px;
font-size: 6em;
padding: 0 30px;
flex: 1;
text-align: right;
  text{
    display: inline-block;
    position: absolute;
    right: 20px;
    transform-origin: right;
  }
`

export const Keypad = styled.div`
height: 400px;
display: flex;
`

export const InputKeys = styled.div`
width: 240px;
  button {
    font-size: 2em;
    width: 80px;
    height: 80px;
    border-top: 1px solid #777;
    border-right: 1px solid #666;
    text-align: center;
    line-height: 80px;
  }
`

export const DigitKeys = styled.div`
background: #e0e0e7;
display: flex;
flex-direction: row;
flex-wrap: wrap-reverse;
  button{
    width: 80px;
    height: 80px;
    border-top: 1px solid #777;
    border-right: 1px solid #666;
    text-align: center;
    line-height: 80px;
    font-size: 2.25em;
      :first-child {
        width: 240px;
      }
  }
`

export const FunctionKeys = styled.div`
display: flex;
width: 240px;
background: linear-gradient(to bottom,
rgba(202, 202, 204, 1) 0%,
rgba(196, 194, 204, 1) 100%);
  button {
    width:240px;
    display: block;
    background: none;
    border: none;
    padding: 0;
    font-family: inherit;
    user-select: none;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`

export const OperatorKeys = styled.div`
background: linear-gradient(to bottom,
rgba(252, 156, 23, 1) 0%,
rgba(247, 126, 27, 1) 100%);
  button{
    color:white;
    border-right:0;
    font-size:3em;
    width: 80px;
    height: 80px;
    border-top: 1px solid #777;
    border-right: 1px solid #666;
    text-align: center;
    line-height: 80px;
      :first-child{border-left: 1px solid #666;
  }
}
`
