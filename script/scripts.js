function calculate(){
    const triangleBase = document.getElementById('triangle-base');
    const baseValue = triangleBase.value;
    const base = parseFloat(baseValue);
    console.log(base);


    const triangleHeight = document.getElementById('triangle-height');
    const heightValue = triangleHeight.value;
    const height = parseFloat(heightValue);
    console.log(height);

    const area = 0.5 *base * height ;
    console.log("Of the teriangle Area is : ", area);

    const trianglearea = document.getElementById('tringle-area');
    trianglearea.innerText = area;
}

function calculaterectangle(){
    const rectanglewidth = document.getElementById('rectangle-width')
    const widthValue = rectanglewidth.value;
    const width = parseFloat(widthValue);
    console.log(width);

    const rectanglelength = document.getElementById('rectangle-length')
    const rectangleValue = rectanglelength.value;
    const length = parseFloat(rectangleValue);
    console.log(length);

    const area = width * length ;
    console.log("Of the rectangle Area is : ", area);

    const rectanglearea = document.getElementById('rectangle-area');
    rectanglearea.innerText = area;
}