import { Text, FlexBox, Slide, fadeTransition, Box } from "spectacle";
import ResponsiveText from "../../shared/ResponsiveText";
import styles from "./TalentAgent.module.css"
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";
import { SyncLoader } from "react-spinners";
import { KeyboardEvent } from "react";
import { ChatService } from "./ChatService";

const chatService = new ChatService()

export default function EndToEnd() {
    const lastElementRef = useRef<HTMLElement | undefined>(undefined)
    const [message, setMessage] = useState("")
    const [isSending, setSending] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        // TODO: This is duplicated in client and server!
        { id: 0, author: MessageAuthor.Assistant, content: "Hi! I'm Claudio 3.5. I'd be happy to chat with you about Fernando!", loading: false }
    ])

    async function send() {
        if (!message.length || isSending) {
            return
        }

        messages.push({ id: messages.length, author: MessageAuthor.User, content: message, loading: false })

        const assistantMessage = { id: messages.length, author: MessageAuthor.Assistant, content: "", loading: true }
        messages.push(assistantMessage)
        setMessages(messages)

        setMessage("")

        setSending(true)

        const response = await chatService.send(message)

        assistantMessage.content = response
        assistantMessage.loading = false
        setMessages(messages)

        setSending(false)
    }

    const lastContent = messages.length ? messages[messages.length - 1].content : undefined

    useEffect(() => {
        lastElementRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages, lastContent])

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            send()
        }
    }

    function handleElement(element: unknown, id: number){
        if (id !== messages.length - 1) {
            return
        }

        lastElementRef.current = element as HTMLElement
    }

    return (
        <Slide backgroundColor="primary" transition={fadeTransition}>
            <FlexBox flexDirection="column" height="100%">
            <ResponsiveText color="#666666" height="100%">Here's my AI-based <i>talent agent</i> if you have any questions. Feel free to try it! <strong>He's quite intense so don't take him too seriously...</strong></ResponsiveText>
                <FlexBox width="80%" height="100%" flexDirection="column" className={styles.chat}>
                    <FlexBox flexDirection="column" justifyContent="flex-start" alignItems="left" width="100%" height="100%" flex="1 1 auto" className={styles.messages} >
                        {
                            messages.map((message) => {
                                switch (message.author) {
                                    case MessageAuthor.Assistant:
                                        return (<AssistantChatEntry
                                            ref={(element) => {handleElement(element, message.id)}}
                                            key={message.id}
                                            message={message} />)
                                    case MessageAuthor.User:
                                        return (<UserChatEntry key={message.id} message={message} />)
                                }
                            })
                        }
                    </FlexBox>
                    <FlexBox width="100%" height="100%" flex="0" className={styles.inputContainer}>
                        <input className={styles.messageInput} value={message} onChange={e => setMessage(e.target.value)} onKeyDown={handleKeyDown} />
                        <AwesomeButton
                            type="primary"
                            disabled={isSending}
                            before={<FontAwesomeIcon key={"icon"} icon={faPaperPlane} />}
                            onPress={send}
                        >
                            SEND
                        </AwesomeButton>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </Slide>
    );
}

type Message = {
    id: number,
    author: MessageAuthor
    content: string
    loading: boolean
}

enum MessageAuthor {
    User = 'USER',
    Assistant = 'ASSISTANT'
}

type AssistantChatEntryProps = {
    message: Message
}

const AssistantChatEntry = forwardRef(function AssistantChatEntry(props: AssistantChatEntryProps, ref: ForwardedRef<unknown>) {
    return (
        <FlexBox ref={ref} width="100%" justifyContent="flex-start">
            <FlexBox className={styles.assistant}>
                <Text color="#333333" fontSize="16px" display="inline-box">{props.message.content}</Text>
                {props.message.loading &&
                    <SyncLoader size={6} style={{ translate: "-100%" }} />
                }
            </FlexBox>
        </FlexBox>
    )
})

type UserChatEntryProps = {
    message: Message
}

function UserChatEntry(props: UserChatEntryProps) {
    return (
        <FlexBox width="100%" justifyContent="flex-end">
            <Box className={styles.user}>
                <Text color="#333333" fontSize="16px" display="inline-box">{props.message.content}</Text>
            </Box>
        </FlexBox>
    )
}
