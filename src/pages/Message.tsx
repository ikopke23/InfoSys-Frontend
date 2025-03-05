import { Form, FormGroup, Input, Label } from "reactstrap";
import "../css/message.css"


const Message = () => {

    return (

        <div>
        
          <h1 className="display-3">Hello World!</h1>
          <p className="lead">
            Welcome to Submit a Message! <br></br>
            Check out <code>src/pages/Home.tsx</code> to see how you can get
            started.
          </p>
        
            <div className="messageForm">
                <Form>
                    <FormGroup>
                    <Label for="messageBody">
                    Message
                    </Label>
                    <Input
                    id="messageBody"
                    name="body"
                    placeholder="Type your message here!"
                    className="messageBody"
                    />
                    </FormGroup>
                </Form>

            </div>
        </div>
      );

}

export default Message;