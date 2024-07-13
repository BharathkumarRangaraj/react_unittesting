import { render, screen } from "@testing-library/react";
import Greetings from "./Grettings";
import userEvent from "@testing-library/user-event";

describe('Greeting component',()=>{
    test('testing hello world text',()=>{
        //arrange
        render(<Greetings/>);

        //act
        //nothing

        //assert
    
        const helloworldelement=screen.getByText('Hello World',{exact:false});
        expect(helloworldelement).toBeInTheDocument();
    })
   test('renders good to see you if button is not clicked',()=>{
    render(<Greetings/>);
    const onclicktexttest=screen.getByText('good to see you',{exact:false});
    expect(onclicktexttest).toBeInTheDocument();
   })

   test('renders changed if button is clicked',()=>{

    //arrange
    render(<Greetings/>);
    
    //act
    const buttonElement=screen.getByRole('button');
    userEvent.click(buttonElement)
    //assert
    const oncl=screen.getByText('changed');
    expect(oncl).toBeInTheDocument();
   })
})

