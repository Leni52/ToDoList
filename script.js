
		
		function neuesLi(eingabetext){
			let neuLi 	= document.createElement('li');
			let neuText = document.createTextNode(eingabetext);
			neuLi.appendChild( neuText );
			neuLi.setAttribute('class','border');
			
			let papa = document.querySelector('.beispiel');
			papa.appendChild( neuLi );
            var x = document.createElement("INPUT");
            x.setAttribute("type", "checkbox");
            x.setAttribute("class", "box");
            x.style.display = 'inline';
            
            papa.appendChild(x);

		}
		
		function loescheLi(){

		var boxes =  document.getElementsByClassName("box");
        var i;
		var papa = document.getElementsByTagName('ul');
		var textLi = document.getElementsByTagName('li');
//boxes[i] is for the checkedBox
//textLi is for the corresponding li
          for(i=0; i<boxes.length; i++){
			  let kind = boxes[i];

              if(kind.checked == true){
              console.log(i);
			   textLi[i].remove();
               boxes[i].remove();
                                
              }        
         updatecount();			
        }
	}
           
            
		
		
		
		function enterabfrage( event ){
			let x = event.which || event.keycode;	
			if( x == 13 ){							
				let p = eingabe.value;				
				neuesLi(p);							
				eingabe.value = " ";					
			}
		}	
		
		
		function updatecount(){
			let nodelist = document.getElementsByTagName('li').length ;
			let anzeige =  document.getElementsByTagName('h2')[0];
			//anzeige.innerText = ;
			 
		}	
		
		
		document.getElementById('eingabe').addEventListener('keypress', enterabfrage );
		document.getElementById('entfernen').addEventListener('click', loescheLi );
		document.getElementById('auswahl').addEventListener('click',
			function(){
				neuesLi( eingabe.value );
			}
		);


        

        