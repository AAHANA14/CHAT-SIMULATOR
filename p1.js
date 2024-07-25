function sendMessage(){
    const messageInput=document.getElementById('message-input');
    const message= messageinput.value.trim();
    if (message !==''){
        const chatMessages=document.querySelector('.chat-messages');
        const messageElement=document.createElement('div')
        messageElement.classList.add('message');
        messageElement.textContent=message;
        chatMessages.appendChild(messageElement);
        messageInput.value='';
        chatMessages.scrollTop=chatMessages.scrollHeight;
    }
    }

    //EVENT LISTENER FOR SEND BUTTON CLICK EVENT
    document.getElementById('send-button').addEventListener('click',sendMessage);
    document.getElementById('messageinput').addEventListener('keydown',(event) => 
        {if(event.key =='Enter') 
            {event.preventDefault();
            sendMessage();}
    });