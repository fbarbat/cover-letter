// dev
const sendMessageUrl = import.meta.env.DEV ? 
    "http://127.0.0.1:5001/fb-cover-letter/us-central1/sendMessage":
    "https://sendmessage-ewzxpjvsia-uc.a.run.app"

export class ChatService {
    private chatID: string | undefined

    async send(message: string): Promise<string> {
        try {
            const response = await this.doSend(this.chatID, message)
            this.chatID = response.chatID
            return response.content
        } catch(error) {
            console.error("Error sending chat message", error);
            return "Something went wrong. :( Try later?"
        }
    }

    private async doSend(chatID: string | undefined, message: string): Promise<SendMessageResponse> {
        const response = await fetch(sendMessageUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
             chatID,
             message
            })
        })

        const json = await response.json()

        return json as SendMessageResponse
    }
}

type SendMessageResponse = {
    content: string
    chatID: string
}