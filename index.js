// import React from "react"
// import ReactDOM from "react-dom"

// 함수형 컴포넌트
function helloWorldButton () {

    // 비 구조화 할당
    const [isClick, setClickState] = React.useState(false)
    const text = isClick ? "Bye world!" : "Hello world!"
    
    return React.createElement(
        "button", 
        {onClick: () => setClickState(!isClick)}, 
        text
        )
}

const rootContainer = document.getElementById('react-root')
ReactDOM.render(React.createElement(helloWorldButton), rootContainer)

