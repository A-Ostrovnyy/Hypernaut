function routingServicesLinks() {
    
    const link = document.querySelector('.services__link ');
    link.addEventListener('click', ()=>{
        const target = document.getElementById('tabs');
        
        console.log(target.pageY);
        
        
        // function getCoords(elem) {
        //     const box = elem.getBoundingClientRect();

        //     const pageYOffset = 175;
        //     const pageXOffset = 0;
          
        //     return {
        //       top: box.top + pageYOffset,
        //       left: box.left + pageXOffset
        //     };
          
        // }

        // console.log(getCoords(target));
        
    })
    
}

export default routingServicesLinks;
