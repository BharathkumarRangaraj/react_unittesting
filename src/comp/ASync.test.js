import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component',()=>{
    test('render post if req succeded',async()=>{
        render(<Async/>)

        const listItemElemet=await screen.findAllByRole('listitem');
        expect(listItemElemet).not.toHaveLength(0);
    })
})