import React from 'react'

function Message({ message }) {
    console.log('okokokokok ', message)

    const getExactDate = (dateStamp) => {
        const dateObj = new Date(dateStamp).toString().split(' ');
        const [, month, dateString, , time] = dateObj
        const date = `${dateString} ${month}  ${time}`
        return date
    }
    return (
        <>
            <div className="message">
                <div className="avatar_wrapper_message">
                    <img className="user-avatar" src={message?.avatar} alt='avatar' />
                </div>
                <div className="message-text">
                    {message?.message}
                    <div className="message-timeline">{getExactDate(message?.timestamp)}</div>
                </div>

            </div>
        </>
    )
}

export default Message
