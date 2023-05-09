const Shape=require("../Shape")

describe('Shape',()=>{

    describe('shapeSVG circle',()=>{
        it('should return details about a circle when circle is passed as an argument ', () => {
            const shape = new Shape("txt","Blue","Circle");
            const result = (shape.shapeSVG()==='circle cx="100" cy="150" r="75"')
      
            expect(result).toEqual(true);
          });
        });
    describe('shapeSVG square',()=>{    
        it('should return details about a square when square is passed as an argument ', () => {
            const shape = new Shape("txt","Blue","Square");
            const result = (shape.shapeSVG()==='rect width="150" height="150" x="25" y="70"')
      
            expect(result).toEqual(true);
          });
        });
    describe('shapeSVG triangle',()=>{
        it('should return details about a polygon when triangle is passed as an argument ', () => {
            const shape = new Shape("txt","Blue","Triangle");
            const result = (shape.shapeSVG()==='polygon points="25,175 100,25 175,175"')
      
            expect(result).toEqual(true);
          });
    });





    describe('setColor Name',()=>{
        it("Should return the original string when it is a color name or Hex Code",()=>{
            const shape = new Shape("txt","Blue","Circle")
            const result=(shape.setColor()==='Blue')

            expect(result).toEqual(true);
        })
    });
    describe('setColor RGB',()=>{
        it("Should return an RGB format wehn 3 numbers are passed in",()=>{
            const shape = new Shape("txt","22,22,22","Circle")
            const result=(shape.setColor()==='rgb(22,22,22)')

            expect(result).toEqual(true);
        })

    });
    describe('setText',()=>{
        it("Should return a 3 char long string when a longer string is passed in",()=>{
            const shape = new Shape("This is a test entry","22,22,22","Circle")
            const result=(shape.setText("This is a test entry")==='Thi')

        })
        
    });
});