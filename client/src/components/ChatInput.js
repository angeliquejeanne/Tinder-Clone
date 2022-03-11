import { useState } from "react"

const ChatInput = () => {
    const [textArea, setTextArea] = useState(null)
    return (
        <div className="chat-input">
            <textarea value={textArea} oonChange={(e) => setTextArea(e.target.value)}/>

            <div className="secondary-button">Submit</div>
        </div>
    )
}

export default ChatInput