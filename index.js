// import React from "react"
// import ReactDOM from "react-dom"

// 함수형 컴포넌트
function helloWorldButton () {

    // 비 구조화 할당
    const [isClick, setClickState] = React.useState(false)
    
    return React.createElement(
        "button", 
        {onclick: () => {
            
        }},
        "Hello world!"
        )
}

const rootContainer = document.getElementById('react-root')
ReactDOM.render(React.createElement(helloWorldButton), rootContainer)

function returnOneThreeArray() {
    return [1, 3]
}

const [a, b] = returnOneThreeArray()
const [a, b] = [1, 3]