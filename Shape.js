class Shape{
    constructor(text,color,type){
        this.text=this.setText(text);
        this.color=color;
        this.type=type;
        
    }
    renderSVG(){
        let resText=`
        <svg height='300' width='200'>
            <${this.shapeSVG()} fill="${this.setColor()}"/>
            <text x="66" y="160" font-size="300%" fill="black">${this.text}</text>
        </svg>
        `;
        return resText;
    }
    shapeSVG(){
        let svgText;
        switch(this.type){
            case 'Square':
                svgText='rect width="150" height="150" x="25" y="70"'
                break;
            case 'Circle':
                svgText='circle cx="100" cy="150" r="75"'
                break;
            case 'Triangle':
                svgText='polygon points="25,175 100,25 175,175"'
                break;
            default:
                break;
        }
        return svgText;
    }
    setColor(){
        if(this.color[0]==='#')
            return this.color
        else if(/\d/.test(this.color))
            return `rgb(${this.color})`
        else
            return this.color
    }
    setText(text){
        if(text.length>3)
        return [text[0],text[1],text[2]].join("")
        else
        return text;
    }


}

module.exports=Shape