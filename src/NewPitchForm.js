import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import querystring from 'querystring';


class NewPitchForm extends Component {
  constructor(){
    super();
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(e){
    e.preventDefault();
      let config = {
        headers: {'Authorization': sessionStorage.token}
      };

      let params = {
            'title': e.target.getElementsByTagName('input')[0].value,
            'description': e.target.getElementsByTagName('textarea')[0].value
      }
       axios.post('http://localhost:8000/pitches', querystring.stringify(params), config)
       .then(res => {
         debugger
       }) 

  }

    render(){
        return(
           <Form onSubmit={this.sendForm}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input ref="titles" type="text" name="title" id="title" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input ref="descriptions" type="textarea" name="text" id="description" />
              </FormGroup>
          
              <Button>Submit</Button>
            </Form>
        )
    }
}
export default NewPitchForm;