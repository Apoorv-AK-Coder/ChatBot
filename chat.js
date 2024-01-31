let btn1 = document.getElementById("show");
let btn2 = document.getElementById("hide");

let x = document.getElementById("chat");



btn1.addEventListener("click", form2)
function form2() {
    // console.log("hi");
    if ((x.style.display = "none")) {
        x.style.display = 'block';
        btn1.style.display = 'none';
        btn2.style.display = 'block';
    }
    else {
        x.style.display = 'block';
    }
}

btn2.addEventListener("click", form1)
function form1() {
    if ((x.style.display = "block")) {
        x.style.display = 'none';
        btn1.style.display = 'block';
        btn2.style.display = 'none';
    }
    else {
        y.style.display = 'block';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const chatContainer = document.querySelector('.chat');
    const chatBody = document.querySelector('.chatbody');
    const inputField = document.querySelector('.input');
    const sendButton = document.querySelector('.fa-paper-plane');

    // Dummy responses for the chatbot
    const responses = [
        "Hello! How can I help you?",
        "What brings you here today?",
        "Feel free to ask me anything.",
        "I'm a friendly chatbot ready to assist you."
    ];

    // Function to add a message to the chat
    function addMessage(message, sender) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;

        if (sender === 'user') {
            messageElement.classList.add('user-message');
        } else {
            messageElement.classList.add('bot-message');
        }

        chatBody.appendChild(messageElement);

        // Scroll to the bottom of the chat
        chatBody.scrollTop = chatBody.scrollHeight;

        // Save chat history to local storage
        saveChatToLocalStorage();
    }

    // Function to handle user input
    function handleUserInput() {
        const userInput = inputField.value.trim();

        if (userInput !== '') {
            addMessage(userInput, 'user');
            inputField.value = ''; // Clear the input field

            // Simulate a delayed bot response
            setTimeout(() => {
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessage(randomResponse, 'bot');
            }, 500);
        }
    }

    // Function to save chat history to local storage
    function saveChatToLocalStorage() {
        const chatMessages = Array.from(chatBody.children).map((messageElement) => {
            return {
                message: messageElement.textContent,
                sender: messageElement.classList.contains('user-message') ? 'user' : 'bot'
            };
        });

        localStorage.setItem('chatHistory', JSON.stringify(chatMessages));
    }

    // Function to load chat history from local storage
    function loadChatFromLocalStorage() {
        const savedChat = localStorage.getItem('chatHistory');
        if (savedChat) {
            const chatHistory = JSON.parse(savedChat);
            chatHistory.forEach(({ message, sender }) => {
                addMessage(message, sender);
            });
        }
    }

    // Scroll to the middle of the chat on page load
    chatBody.scrollTop = chatBody.scrollHeight / 2;

    // Load chat history from local storage on page load
    loadChatFromLocalStorage();

    // Event listeners
    sendButton.addEventListener('click', handleUserInput);

    inputField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    });

});
