import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class NewPitchForm extends Component {
    render(){
        return(
           <Form>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="text" id="description" />
              </FormGroup>
          
              <Button>Submit</Button>
            </Form>
        )
    }
}
export default NewPitchForm;