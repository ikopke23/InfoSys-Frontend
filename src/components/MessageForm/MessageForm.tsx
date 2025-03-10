import { Form, FormGroup, Input, Label, Button, ButtonGroup } from "reactstrap";
import { useState } from "react";


const MessageForm = () => {
    const [rSelected, setRSelected] = useState(String);
    const animation: string[] = ["Default CSH", "Just Scrolling", "L Bozo"]
    
    function submit (e: {preventDefault: () => void}) {
        console.log("BUTTON WORKS ")
        e.preventDefault();
        const body = FormData.name;
        alert(`You just submitted ${body}`)
    }
     
    return (
        // <messageForm/>
        <div>
        
          <h1 className="display-3">Welcome to Submit a Message!</h1>
        
            <div className="messageForm">
                <Form onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget);
                    const body = formData.get("body");
                    const time = formData.get("time");
                    const animation = rSelected;


                    console.log(animation+", "+body+", "+time);
                    // console.log()
                    //can send api req with this information somehow
                }}>
                    <FormGroup>
                    <Label for="messageBody">
                    Message
                    </Label>
                    <Input
                    id="messageBody"
                    name="body"
                    placeholder="Type your message here!"
                    className="messageBody col-7"
                    />
                    </FormGroup>

                    <h3>How long do you want your message to play? -- (ask 3da about drink creds for InfoSys)</h3>
                    <Input name="time" className="col-4" type="number" id="replyNumber" min="5" max="45" step="5" data-bind="value:replyNumber" placeholder="in Minutes"/>
                    <h3>What Kind of effects would you like? (More will be added soon @stove frequently so I make more of them)<br></br></h3>
                    <FormGroup>
                    <h5>Radio Buttons</h5>
                        <ButtonGroup>
                            <Button
                            color="primary"
                            outline
                            defaultChecked
                            onClick={() => setRSelected(animation[0])}
                            active={rSelected === animation[0]}
                            >
                            {animation[0]}
                            </Button>
                            <Button
                            color="primary"
                            outline
                            onClick={() => setRSelected(animation[1])}
                            active={rSelected === animation[1]}
                            >
                            {animation[1]}
                            </Button>
                            <Button
                            color="primary"
                            outline
                            onClick={() => setRSelected(animation[2])}
                            active={rSelected === animation[2]}
                            >
                            {animation[2]}
                            </Button>
                        </ButtonGroup>
                        {/* <p>Selected: {rSelected}</p> */}
                      
                    </FormGroup>
                    <button className="btn btn-primary btn-hover" type="submit"
                    onSubmit={(e) => {submit(e)}}
                    >Submit </button>
                </Form>

            </div>
        </div>
      );

}

export default MessageForm;