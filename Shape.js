class Shape{
    constructor(text,color,type){
        this.text=text;
        this.color=color;
        this.type=type;
    }
    renderSVG(){
        let resText=``;
        return resText;
    }
    shapeSVG(){
        let svgText;
        switch(this.type){
            case 'Square':
                break;
            case 'Circle':
                break;
            case 'Triangle':
                break;
            default:
                break;
        }
        return svgText;
    }

}