import HospitalCatalog from "@/components/HospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react"

const mockResult = {
    success: true,
    count: 3,
    data: [
        {
            _id:"652fcbc2d3ef32a64c0d3f38",
            name:"Chulalongkorn Hospital",
            address:"1873 Rama IV Rd",
            district:"Pathum Wan",
            province:"Bangkok",
            postalcode:"10330",
            tel:"026494000",
            picture:"https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
            __v: 0,
            id: "652fcbc2d3ef32a64c0d3f38"
        },
        {
            _id:"652fcd26d3ef32a64c0d3f3b",
            name:"Rajavithi Hospital",
            address:"2 Phaya Thai Rd, Thung Phaya Thai",
            district: "Ratchathewi",
            province: "Bangkok",
            postalcode: "10400",
            tel: "022062900",
            picture: "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
            __v: 0,
            id: "652fcd26d3ef32a64c0d3f3b"
        },
        {
            _id:"652fcdbcd3ef32a64c0d3f3e",
            name: "Thammasat University Hospital",
            address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
            district: "Khlong Luang",
            province: "Pathum Thani",
            postalcode: "12120",
            tel: "029269999",
            picture: "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
            __v: 0,
            id: "652fcdbcd3ef32a64c0d3f3e"
        }
    ]

}

describe('HospitalCatalog', ()=>{
    it('should have correct number of hospitals', async ()=>{
        const hospitalCatalog = await HospitalCatalog({hospitalJson: mockResult})
        render(hospitalCatalog)
        await waitFor(
            ()=> {
                const hospitalImages = screen.queryAllByRole('img')
                expect(hospitalImages.length).toBe(3)
            }
        )
    })
})
