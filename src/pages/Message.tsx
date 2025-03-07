import { Form, FormGroup, Input, Label, Button, ButtonGroup } from "reactstrap";
import "../css/message.css"
import { useState } from "react";


const Message = () => {
    const [rSelected, setRSelected] = useState(null);
    const animation: string[] = ["Default CSH", "Just Scrolling", "L Bozo"]
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
                    <h3>What Kind of effects would you like? (More will be added soon @stove frequently so I make more of them)<br></br></h3>
                    <FormGroup>
                    <h5>Radio Buttons</h5>
                        <ButtonGroup>
                            <Button
                            color="primary"
                            outline
                            onClick={() => setRSelected(animation[0])}
                            active={rSelected === 1}
                            >
                            {animation[0]}
                            </Button>
                            <Button
                            color="primary"
                            outline
                            onClick={() => setRSelected(animation[1])}
                            active={rSelected === 2}
                            >
                            {animation[1]}
                            </Button>
                            <Button
                            color="primary"
                            outline
                            onClick={() => setRSelected(animation[2])}
                            active={rSelected === 3}
                            >
                            {animation[2]}
                            </Button>
                        </ButtonGroup>
                        {/* <p>Selected: {rSelected}</p> */}
                        <h3>How long do you want your message to play? -- (ask 3da about drink creds for InfoSys)</h3>
                        <input className="col-6" type="number" id="replyNumber" min="5" max="45" step="5" data-bind="value:replyNumber" placeholder="in Minutes"/>

                    </FormGroup>
                    <button className="btn btn-primary btn-hover" >
                    Submit
                    </button>{' '}
                </Form>

            </div>
        </div>
      );

}

export default Message;