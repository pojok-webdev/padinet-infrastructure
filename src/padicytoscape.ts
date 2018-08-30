import * as CY from '../node_modules/cytoscape/dist/cytoscape'
export class PadiCytoscape{
    Cy
    constructor(){
        
    }
    removeEdge(){
        var collection = this.Cy.elements("edge[id='Core-BALI']");
        this.Cy.remove( collection );    
    }
    removeNode(){
        var collection = this.Cy.elements("node[id='Neo']");
        this.Cy.remove( collection );    
    }
    addEdge(obj,callback){
        console.log("Add Edge",obj)
        this.Cy.add(obj),
        callback()
    }
    addCircle(obj,callback){
        this.Cy.add(obj)
        callback()
    }
    drawCircle(component_id){
        console.log("Content of component_id",component_id)
        this.Cy = CY({
            container:component_id,
            elements:[
                {data:{id:'IP_Transit'}},
                {data:{id:'Core'}},
                {data:{id:'SURABAYA'}},
                {data:{id:'JAKARTA'}},
                {data:{id:'MALANG'}},
                {data:{id:'BALI'}},
                {data:{id:'Trinity'}},
                {data:{id:'Neo'}},
                {data:{id:'Architect'}},
                {data:{id:'POP_Punten'}},
                {data:{id:'BTS_Selokerto'}},
                {data:{id:'SPIL_Enggano'}},
                {data:{id:'Sucofindo'}},
                {data:{id:'Bidakara'}},
                {data:{id:'Cikarang'}},
                {data:{id:'Graha_MRA'}},
                {data:{id:'Benoa'}},
                {data:{id:'Kuta'}},
                {data:{id:'TP_Transit-Core',source:'IP_Transit',target:'Core'}},
                {data:{id:'Core-SURABAYA',source:'Core',target:'SURABAYA'}},
                {data:{id:'Core-MALANG',source:'Core',target:'MALANG'}},
                {data:{id:'Core-JAKARTA',source:'Core',target:'JAKARTA'}},
                {data:{id:'Core-BALI',source:'Core',target:'BALI'}},
                {data:{id:'SURABAYA-Trinity',source:'SURABAYA',target:'Trinity'}},
                {data:{id:'SURABAYA-Neo',source:'SURABAYA',target:'Neo'}},
                {data:{id:'SURABAYA-Architect',source:'SURABAYA',target:'Architect'}},
                {data:{id:'MALANG-POP_Punten',source:'MALANG',target:'POP_Punten'}},
                {data:{id:'MALANG-BTS_Selokerto',source:'MALANG',target:'BTS_Selokerto'}},
                {data:{id:'JAKARTA-SPIL_Enggano',source:'JAKARTA',target:'SPIL_Enggano'}},
                {data:{id:'JAKARTA-Sucofindo',source:'JAKARTA',target:'Sucofindo'}},
                {data:{id:'JAKARTA-Bidakara',source:'JAKARTA',target:'Bidakara'}},
                {data:{id:'JAKARTA-Cikarang',source:'JAKARTA',target:'Cikarang'}},
                {data:{id:'JAKARTA-Graha_MRA',source:'JAKARTA',target:'Graha_MRA'}},
                {data:{id:'BALI-Benoa',source:'BALI',target:'Benoa'}},
                {data:{id:'BALI-Kuta',source:'BALI',target:'Kuta'}}
            ],
            style:[
                {
                    selector:'node',
                    style:{
                        'background-color':'green',
                        'label':'data(id)'
                    }
                },
                {
                    selector:'edge',
                    style:{
                        'width':'3',
                        'label':'data(id)',
                        'curve-style':'bezier'
                    }
                }
            ],
            layout:{
                name:'breadthfirst',/*PRESET,BREADTHFIRST,GRID*/
                rows:1
            },
            zoom:10,
            pan:{
                x:0,y:0
            }

        })
    }

}