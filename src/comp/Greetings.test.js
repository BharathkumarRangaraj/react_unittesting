import { render, screen } from "@testing-library/react";
import Greetings from "./Grettings";

describe('Greeting component',()=>{
    test('testing hello world text',()=>{
        render(<Greetings/>);
    
        const helloworldelement=screen.getByText('Hello World',{exact:false});
        expect(helloworldelement).toBeInTheDocument();
    })
})

