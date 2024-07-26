var Div = document.createElement('div');
Div.id = 'MyDiv';
Div.style.width = '100%';
Div.style.height = '100px';
Div.style.backgroundColor = 'offwhite';
Div.style.position = 'relative'; 
document.body.appendChild(Div);

var CrtIcon = document.createElement('img');
CrtIcon.src = "./Resources/Cart.png";
CrtIcon.style.height = '20px';
CrtIcon.style.position = 'absolute';
CrtIcon.style.cursor='pointer';
CrtIcon.style.bottom='40px'
CrtIcon.style.right = '120px'; 
Div.appendChild(CrtIcon);

var HeartIcon = document.createElement('img');
HeartIcon.src = "./Resources/Heart.png";
HeartIcon.style.height = '23px';
HeartIcon.style.position = 'absolute';
HeartIcon.style.right = '170px'; 
HeartIcon.style.bottom='40px'
HeartIcon.style.cursor='pointer';
Div.appendChild(HeartIcon);

var CatIcon = document.createElement('img');
CatIcon.src = "./Resources/menu.png";
CatIcon.style.height = '23px';
CatIcon.style.position = 'absolute';
CatIcon.style.right = '70px'; 
CatIcon.style.bottom='40px'
CatIcon.style.cursor='pointer';
Div.appendChild(CatIcon);



function applyHoverEffect(element) {
    element.addEventListener('mouseover', function() {
      element.style.filter = 'invert(50%) hue-rotate(180deg)';
    });
  
    element.addEventListener('mouseout', function() {
      element.style.filter = 'none';
    });
  }

  applyHoverEffect(CrtIcon);
  applyHoverEffect(HeartIcon);
  applyHoverEffect(CatIcon);
