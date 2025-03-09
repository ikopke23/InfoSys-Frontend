import { Card, Container } from "reactstrap";
import "../css/message.css"
import Plug from "../components/Plug"
import MessageForm from "../components/MessageForm";

const Message = () => {
    return (
        <Container>
            <Card className="my-3">
                <Plug />
            </Card>
            <MessageForm />
            
        </Container>
    )
}

export default Message

